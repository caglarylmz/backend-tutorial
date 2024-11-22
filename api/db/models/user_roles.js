
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    roleId: {
        type: mongoose.SchemaType.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.SchemaType.ObjectId,
        required: true
    },
    createdBy: {
        type: mongoose.SchemaType.ObjectId,
        required: true,
    }


});

class UserRoles extends mongoose.Model {

}
schema.loadClass(UserRoles);

module.exports = mongoose.model("user_roles", schema);