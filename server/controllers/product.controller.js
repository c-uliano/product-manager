const Product = require("../models/product.model");

// * GET ALL
module.exports.findAll = (req, res) => {
    Product.find()
        .then(all => res.json(all))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// * GET ONE
module.exports.findOne = (req, res) => {
    Product.findById(req.params.id )
        .then(one => res.json(one))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// * CREATE
module.exports.createOne = (req, res) => {
    Product.create(req.body)
        .then(add => res.json(add))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// * UPDATE
module.exports.updateOne = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
        .then((update) => res.json(update))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

// * DELETE
module.exports.deleteOne = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
}