const fromEvent = require('graphcool-lib').fromEvent;
const bcrypt = require('bcryptjs');

function getGraphcoolUser(api, email) {
  return api
    .request(
      `
    query {
      User(email: "${email}"){
        id
        password
      }
    }`
    )
    .then((userQueryResult) => {
      if (userQueryResult.error) {
        return Promise.reject(userQueryResult.error);
      }
      return userQueryResult.User;
    });
}

module.exports = function (event) {
  if (!event.context.graphcool.pat) {
    console.log('Please provide a valid root token!');
    return { error: 'Email Authentication not configured correctly.' };
  }

  const email = event.data.email;
  const password = event.data.password;
  const graphcool = fromEvent(event);
  const api = graphcool.api('simple/v1');

  return getGraphcoolUser(api, email)
    .then((graphcoolUser) => {
      if (graphcoolUser === null) {
        return {
          error: {
            message: 'Please supply a valid email and password!'
          }
        }; // returning same generic error so user can't find out what emails are registered.
      }

      return bcrypt.compare(password, graphcoolUser.password).then(async (passwordCorrect) => {
        if (passwordCorrect) {
          const token = await graphcool.generateAuthToken(graphcoolUser.id, 'User');
          return { data: { token } };
        }

        return {
          error: {
            message: 'Please supply a valid email and password!'
          }
        };
    })
    .catch((error) => {
      console.log(`Error: ${JSON.stringify(error)}`);
      // don't expose error message to client!
      return { error: 'An unexpected error occured' };
    });
};
