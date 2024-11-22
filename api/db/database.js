const mongoose = require("mongoose")
let instance = null;

class Database {
    constructor() {
        if (instance == null) {
            this.mongoConnection = null;
            instance = this;
        }
        return instance;
    }

    async connect(options) {
        try {
            console.log("Db connecting... ");

            let db = await mongoose.connect(options.CONNECTION_STRING);
            this.mongoConnection = db;
            console.log("Db Connection is successful");
        } catch (error) {
            console.log(error);
            process.exit(1);
        }

    }
}

module.exports = Database