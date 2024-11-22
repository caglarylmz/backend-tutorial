module.exports = {
    "LOG_LEVEL": process.env.LOG_LEVEL || "debug",
    "PORT": process.env.PORT || "3000",
    "CONNECTION_STRING": process.env.CONNECTION_STRING || "mongodb://mongo:Cs.ylmz82@127.0.0.1:27017/mongoDB?retryWrites=true&writeConcern=majority&authSource=admin",

}