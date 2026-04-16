const mongoose = require('mongoose'); const orderSchema = new mongoose.Schema({ user:String }); module.exports = mongoose.model('Order', orderSchema);
