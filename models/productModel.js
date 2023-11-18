//Product Model
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  //write a code for product schema here
  // Defining a Schema:
  // name: name will be a string with required as true
  // price: price will be a string with required as true. Also, write a custom validator to validate the price whose value is greater than 1000.
});

module.exports = mongoose.model('Validation', productSchema);
