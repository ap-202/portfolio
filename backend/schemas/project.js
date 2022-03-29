//lobby model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }]
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;