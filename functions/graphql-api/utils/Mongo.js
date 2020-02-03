const mongoose = require('mongoose');

const MongoConnector = () => {
    
    let dbInstance = {};

    async function initDb() {
        try {
            dbInstance = await mongoose.connect(process.env.MONGO_CONNECTION_STR, { 
                useNewUrlParser: true,
                useUnifiedTopology: true 
            });
            console.log('successfully connected to mongodb');
        } catch (error) {
            console.error(error);
        } 
    }

    function getDb() {
        return dbInstance;
    }

    function closeConnection() {
        return mongoose.connection.close;
    }

    return Object.freeze({
        initDb,
        getDb
    });

}

module.exports = MongoConnector();
