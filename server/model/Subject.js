const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    pdfUrl:{
        type:String,
        require:true
    }
});
module.exports = mongoose.model('Subject', SubjectSchema);