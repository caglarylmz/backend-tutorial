const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    fullName: { type: String, required: true },
    phoneNumber: Number,


}, {
    timestamps: true,
});

class Users extends mongoose.Model {

}
schema.loadClass(Users);

module.exports = mongoose.model("users", schema);