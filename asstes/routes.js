var express = require('express')
var router = express.Router()

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

var Product = require('./model/product');
var WishList = require('./model/wishlist');
var Cart = require('./model/cart');
var SaleItems = require('./model/saleItems');

router.use(function timeLog (req, res, next) {
   console.log('Time: ', Date.now())
    next()
})

router.get('/', function(req, res) {
    res.send('Players Home Page');
});

router.get('/about', function(req, res) {
   res.send('About Players'); 
});

router.post('/product', function(request, response) {
    var product = new Product();
    product.title = request.body.title;
    product.price = request.body.price;
    product.save(function(err, savedProduct) {
       if(err) {
           response.status(500).send({error:"Could not save product"});
       } else {
           response.status(200).send(savedProduct);
       }
    });
});

router.get('/product',function(request, response) {
    
    Product.find({},function(err,products) {
        if(err) {
            response.status(500).send({error:"Could not fatch product"});
        } else {
            response.send(products);
        }
    });
});
/*********Cart Area********/
router.get('/Cart',function(request, response) {
    Cart.find({}).populate({path:'products', model: 'Products'}).exec(function(err, cart) {
        if(err) {
           response.status(500).send({error:"Could not fetch the cart"});
       } else {
           response.status(200).send(cart);
       }
    })
});

router.post('/Cart', function(request, response) {
    var cart = new Cart();
    
    cart.save(function(err, NewCart) {
       if(err) {
           response.status(500).send({error:"Could not save product"});
       } else {
           response.status(200).send(NewCart);
       }
    });
});

router.put('/cart/product/add', function(request, response) {
   Product.findOne({_id: request.body.productId}, function(err, product) {
        if(err) {
           response.status(500).send({error:"Could not add item to the cart"});
       } else {
           Cart.update({_id:request.body.cartId}, {$addToSet:{products:product._id}}, function(err, cart) {
                    if(err) {
                        response.status(500).send({error:"Could not add item to the cart"});
                    } else {
                        response.status(200).send("Seccessfully added to the cart");
                    }
           });
            
        }
   });
});

router.delete('/cart/product/remove', function(request, response) {
   Product.findOne({_id: request.body.productId}, function(err, product) {
        if(err) {
           response.status(500).send({error:"Could not remove item to the cart"});
       } else {
           Cart.update({_id:request.body.cartId}, {$pull:{products:product._id}}, function(err, cart) {
                    if(err) {
                        response.status(500).send({error:"Could not add item to the cart"});
                    } else {
                        response.status(200).send("Seccessfully removed from the cart");
                    }
           });
            
        }
   });
});


module.exports = router;





