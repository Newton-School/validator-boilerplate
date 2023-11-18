const router = require('express').Router();
const Product = require('../models/productModel');
const mongoose = require('mongoose');

router.post('/product', async (req, res) => {
  const productData = req.body;
  try {
    Product.create(productData)
      .then((product) => {
        res.status(200).json({ message: 'Product created successfully' });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({ message: 'Error creating product' });
      });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      // Handle validation errors
      const errors = {};
      for (let field in error.errors) {
        errors[field] = error.errors[field].message;
      }
      res.status(400).json({ errors });
    } else {
      // Handle other errors
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

module.exports = router;
