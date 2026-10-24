const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title:{
        type: String,
        required : true,
    },
    description: String,
    image: {
    filename: {
        type: String,
        default: "listingimage"
    },
    url: {
        type: String,
        default: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710609942195-b9dab8f48fc6"
    }
},
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing" , ListingSchema);
module.exports = Listing;