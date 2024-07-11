const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true , 'An item should have a name']
    },
    price:{
        type: String,
        required: [true, 'An item should have a price']
    },
    priceDiscount : Number,
    description:{
        type: String,
        required: [true , 'An item should have a proper description'],
        trim: true
    },
    imageCover:{
        type: String,
        required: [true , 'A tour must a have a cover picture']
    },
    images:[String],
    ratingsAverage: {
        type: Number,
        default: 4.5
    },
    ratingsQuantity :{
        type: Number,
        default: 0
    },
});

const Item = mongoose.model('Item' , itemSchema);
module.exports = Item;