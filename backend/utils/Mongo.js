const mongoose = require('mongoose');

const MongoConnector = () => {
    
    let dbInstance = {};
    
    function setConnectionString() {
        const {
            NODE_ENV,
            MONGO_USERNAME,
            MONGO_PASSWORD,
            MONGO_HOSTNAME,
            MONGO_PORT,
            MONGO_DB
        } = process.env;
        console.log('hostname: ', MONGO_HOSTNAME);
        // Connect to mongodb without authentication in development
        if ( NODE_ENV == 'development') {
            return `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
        } else {
            return `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
        }
    }

    async function initDb() {
        const url = setConnectionString();
        
        try {
            dbInstance = await mongoose.connect(url, { useNewUrlParser: true });
            console.log('successfully connected to mongodb');
        } catch (error) {
            console.error(error);
        } 
    }

    function getDb() {
        return dbInstance;
    }

    return Object.freeze({
        initDb,
        getDb
    });

}

module.exports = MongoConnector();
