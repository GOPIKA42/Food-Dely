const express = require('express');
const router = express.Router();
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const isLoggedIn = require("../middlewares/isLoggedIn");
const deliveryManController = require("../controllers/deliveryManController");

// # create new delivery man 
router.post('/create', isLoggedIn, verifyRole("DeliveryMan") ,asyncErrorHandler(deliveryManController.createDeliveryMan));
// # delete 
router.delete('/:id', isLoggedIn, verifyRole("DeliveryMan") , asyncErrorHandler(deliveryManController.deleteDeliveryMan));
// # update details
router.put('/update/:id', isLoggedIn, verifyRole("DeliveryMan") , asyncErrorHandler(deliveryManController.updateDeliveryManDetails)); 
// # get all 
router.get('/', asyncErrorHandler(deliveryManController.getAllDeliveryMan));
// # get by id
router.get('/:id', asyncErrorHandler(deliveryManController.getDeliveryManById));
// # update location
router.put('/location/:id', isLoggedIn ,verifyRole("DeliveryMan") , asyncErrorHandler(deliveryManController.updateLocation));
// # pick up order 
router.put('/pick/:id', isLoggedIn ,verifyRole("DeliveryMan"), asyncErrorHandler(deliveryManController.pickOrder));
module.exports = router;