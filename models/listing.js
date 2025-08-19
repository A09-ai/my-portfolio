const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,
    url: {
        type: String,
        default:"https://media.istockphoto.com/id/185275043/photo/old-stone-house.jpg?s=2048x2048&w=is&k=20&c=8XtYRExld3vQIzHOBUWfdz62CgrN-_g2N0KcW1IH7w4="},
   
  },
  price: Number,
  location: String,
  country: String,
});

module.exports = mongoose.model("Listing", listingSchema);
