const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require('mongoose');

class TestDatabase {
  constructor() {
    this.database = null;
    this.mongoServer = null;
  }

  async connect() {
    this.mongoServer = new MongoMemoryServer();

    try {
      const mongoDBURI = await this.mongoServer.getUri();
      const connection = await mongoose.connect(mongoDBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      this.database = connection;      
      
    } catch (error) {
      console.error(error)
    }
  }

  async seed(collection, data) {
    const result = await this.database.connection.collection(collection).insertMany(data);
  }

  async stop() {
    await this.database.connection.close();
    await this.mongoServer.stop();
  }
}

module.exports = TestDatabase





// module.exports = {
//   startDatabase,
//   stopDatabase,
// };
