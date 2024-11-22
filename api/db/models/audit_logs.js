const mongoose = require("mongoose");

const schema = mongoose.Schema({
    level: String,
    emaail: String,
    location: String,
    procType: String,
    log: String,
}, {
    versionKey: false,
    timestamps: true,
});

class AuditLogs extends mongoose.Model {

}
schema.loadClass(AuditLogs);

module.exports = mongoose.model("audit_logs", schema);