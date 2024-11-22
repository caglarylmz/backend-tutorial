const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: Boolean },
    isActive: { type: Boolean, required: true },
    createdBy: {
        type: mongoose.SchemaType.ObjectId,
        required: true,
    }


}, {
    versionKey: false,
    timestamps: true,
});

class Categories extends mongoose.Model {

}
schema.loadClass(Categories);

module.exports = mongoose.model("categories", schema);