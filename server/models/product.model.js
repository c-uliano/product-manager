const mongoose = require('mongoose');

// * UPDATE KEY NAMES TO WHAT IS NEEDED IN THE DOCUMENT
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required."],
        minlength: [3, "title must be at least 3 characters long."]
    },
    price: {
        type: Number,
        required: [true, "price is required."],
        minlength: [1, "price must be at least 1 characters long."]
    },
    description: {
        type: String,
        required: [true, "description is required."],
        minlength: [10, "description must be at least 10 characters long."]
    },
}, { timestamps: true });

// const Rename = mongoose.model("Rename", schema);
// module.exports = Rename;
// OR
module.exports = mongoose.model("Product", schema);
