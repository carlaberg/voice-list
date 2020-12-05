const fakingoose = require('fakingoose');
const mongoose = require('mongoose')
const ListSchema = require('../../graphql-api/user/user.model.js');

const fakeUser1 = {
  objectId: mongoose.Types.ObjectId('5f54d28ebef1e6f60116380c'),
  stringId: '5f54d28ebef1e6f60116380c'
}

const options = {
  _id: {
    tostring: false,
    value: fakeUser1.objectId
  },
  email: {
    type: 'email'
  },
}
const listFactory = fakingoose(ListSchema, options);
module.exports = [
  listFactory.generate()
];
 
module.exports.fakeUser1 = fakeUser1