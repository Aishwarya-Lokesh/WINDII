const mongoose = require('mongoose'); const wishlistSchema = new mongoose.Schema({ user:String }); module.exports = mongoose.model('Wishlist', wishlistSchema);
