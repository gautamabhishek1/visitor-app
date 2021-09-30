const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: true,
    },
    lastname: {
        type: String,
        trim: true,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,    
    },  
    check: {
        type: String,  
    },
    
},

 { timestamps: true }

);

const Visitor = mongoose.model('Visitor',visitorSchema);

module.exports = Visitor;