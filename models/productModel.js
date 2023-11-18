//Product Model
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  price: {
    type: String,
    required: [true, 'Price is required'],
    validate: {
      validator: function (value) {
        // Custom price validation logic
        return parseFloat(value) > 1000;
      },
      message: 'Price must be greater than 1000',
    },
  },
});

module.exports = mongoose.model('Validation', productSchema);
