const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    createdBy: {
        type: mongoose.SchemaType.ObjectId,
        required: true,
    }


}, {
    versionKey: false,
    timestamps: true,
});

class Roles extends mongoose.Model {

}
schema.loadClass(Roles);

module.exports = mongoose.model("roles", schema);