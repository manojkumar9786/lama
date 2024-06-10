const {sub} = require('date-fns');
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastEdited: { type: Date, default: sub(new Date(), {minutes: 10}).toISOString() },
});

module.exports = mongoose.model('Project', projectSchema);
