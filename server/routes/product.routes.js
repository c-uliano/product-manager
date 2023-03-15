const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/product', ProductController.findAll);

    app.get('/api/product/:id', ProductController.findOne);

    app.post('/api/product', ProductController.createOne);

    // * changes all values in the database to match the request body
    // app.put('/api/product/:id', RenameController.updateOne);

    // * changes only the values in the request body
    app.patch('/api/product/:id', ProductController.updateOne);

    app.delete('/api/product/:id', ProductController.deleteOne);
};