const mongoose = require('mongoose');

exports.closeDbConnection = async (resolve, root, args, context, info) => {
  console.log('before resolver');
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STR, { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
    console.log('successfully connected to mongodb');
    const result = await resolve(root, args, context, info);
    console.log('after resolver');
    mongoose.connection.close();
    return result;
    
  } catch (error) {
      console.error(error);
  } 
}