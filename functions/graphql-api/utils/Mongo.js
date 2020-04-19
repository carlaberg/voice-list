const mongoose = require('mongoose');

const MongoConnector = () => {
    async function initDb() {
        try {
            const db = await mongoose.connect(process.env.MONGO_CONNECTION_STR, { 
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

            console.log('successfully connected to mongodb');

        } catch (error) {
            console.error(error);
        } 
    }

    return Object.freeze({
        initDb
    });

}

module.exports = MongoConnector();
