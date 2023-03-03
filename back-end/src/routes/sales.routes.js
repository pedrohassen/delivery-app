const express = require('express');
const salesController = require('../controllers/sales.controller');
const validateToken = require('../middleware/token.validation');
const { salesValidation, typeOfValidation } = require('../middleware/sales.validation');

const router = express.Router();

router.post(
  '/',
  validateToken,
  salesValidation,
  typeOfValidation,
  salesController.createSale,
  );
router.get('/', validateToken, salesController.getAllSales);
router.get('/:id', validateToken, salesController.getSaleById);
router.get('/customer/:userId', validateToken, salesController.getSalesByUserId);

module.exports = router;