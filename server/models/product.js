const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

module.exports = function(app){

    var ProductSchema = new mongoose.Schema({
        _id: Number,
        name: {type: String, required: [true, "Please enter a name."], minlength: [3, "Name must be at least 3 characters long."]},
        qty: {type: String, required: [true, "Please enter a quantity."], min: [0, "Quantity must be 0 or greater."]},
        price: {type: Number, required: [true, "Please enter a price."], min: [0, "Price must be 0 or greater."]}
    });

    mongoose.model('Product', ProductSchema);
}