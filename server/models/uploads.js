const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    uploadDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Upload', uploadSchema);
