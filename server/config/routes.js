// const movies = require('../controllers/movies.js');
const path = require('path');
const product = require('../controllers/products.js');

module.exports = function(app){

    app.post('/new', product.create);
    app.get('/all', product.getAll);
    app.get('/getOne/:id', product.getOne);
    app.delete('/delete/:id', product.delete);
    app.put('/update', product.update);

    //Add /api/ before all to see if next portion works with refresh

    // app.all("*", (req,res,next) => {
    //     res.sendFile(path.resolve('./public/dist/public/index.html'))
    // })
}