const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Product = mongoose.model("Product");
app.use(bodyParser.json());

module.exports = {

    getAll(req, res){
        Product.find({}, function(err, products){
            if(err){
                console.log(err)
                res.json(err)
            } else {
                res.json(products)
            }
        })
    },

    getOne(req, res){
        console.log("req.params>", req.params)
        Product.findOne({_id: req.params.id}, function(err, current_product){
            if(err){
                console.log("Error retrieving product", err)
                res.json(err)
            } else {
                res.json(current_product)
            }
        })
    },

    create(req, res){
        // Generating a random number for id
        let rand_id = Math.floor(Math.random()*9999999);
        console.log(rand_id);
        const product = new Product ({_id: rand_id, name: req.body.name, qty: req.body.qty, price: req.body.price});

        product.save()
            .then(function(newProduct){
                console.log("new product created", newProduct)
                res.json(newProduct)
            })
            .catch(error => {
                const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message)
                console.log(errors);
                res.json({error: errors})
            })
    },

    delete(req, res){
        Product.findOneAndRemove({_id: req.params.id}, function(err){
            if(err){
                console.log(err)
                res.json(err)
            } else {
                console.log("Deleted");
                res.json(true)
            }
        })
    },

    update(req, res){
        Product.findById(req.body._id, function(err, product){
            if(err){
                console.log("err in update", err)
                res.json(err)
            } else {
                product.name = req.body.name;
                product.qty = req.body.qty;
                product.price = req.body.price
                product.save()
                .then(function(updated_product){
                    console.log("product updated", updated_product)
                    res.json(updated_product)
                })
                .catch(error => {
                    const errors = Object.keys(error.errors)
                    .map(key => error.errors[key].message)
                    console.log(errors);
                    res.json({error: errors})
                })
                console.log(product)
            }
        })
    }
}