const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    dob: {
        type: Date
    }
}, {
    collection: 'students'
})

module.exports = mongoose.model('StudentSchema', studentSchema)