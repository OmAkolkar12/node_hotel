const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    taste:{
        type: String,
        enum: ['sweet', 'spicy', 'savory', 'bitter', 'sour'],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    ingredeints:{
        type: [String],
        default: []
    }, 
    sales:{
        default: 0,
        type: Number
    }

});

const MenuItem = mongoose.model('MenuItem', menuSchema);

module.exports = MenuItem;
    