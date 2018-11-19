var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
 //requiring path and fs modules
var fs = require('fs');
var path = require('path');




//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT");
  next();
});


 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "client/build")));

app.get('/resumeOS', function(request, response) {
const { fileid } = request.params;
response.sendFile(__dirname + '/asstes/OriSayda-CV.jpg'); 
});


app.post('/folder/projects', function(request, response) {
    
    var fileN;
    var Projectpath = './projects';
    var filesArray = [];
    var options = {
        encoding: 'utf8', // optional
        withFileTypes: true,   // optional
    }
  
    if(request.body.fileName === null || request.body.fileName === undefined) {
        fileN='';
    } else {
        fileN = '/'+request.body.fileName;
    }
    fs.readdir(Projectpath+fileN,options, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } else {
        //listing all files using forEach
        files.forEach(function (file) {
            var filePath;
            var isDir = fs.statSync(Projectpath+fileN+'/'+file);
        var fileData = {
            fileName: file,
            fileOrFolder: isDir.isDirectory(),
            fileType: path.extname(file),
        }
        
        filesArray.push(fileData); 
        });
        var data = JSON.stringify(filesArray);
        response.send(data);
        }   
    });
    
});

app.post('/file/content', function(request, response) {
    
    var fileN;
    var Projectpath = './projects';
    var fileObject = {
        fileName: "",
        fileType: "",
        cotent: "",
    };
    if(request.body.fileName === null || request.body.fileName === undefined) {
        fileN='';
    } else {
        fileN = '/'+request.body.fileName;
    }
    fs.readFile(Projectpath+fileN, 'utf8', function(err, contents) {
        if(err) {
            console.log("Can't read the file!")
        } else {
            var ext = path.extname(Projectpath+fileN);
            ext = ext.substr(1);
            var obj = {
                title : fileN,
                content : contents,
                ext : ext,
            };
            var data = JSON.stringify(obj); 
            response.send(data);
        }
    });
})

app.post('/sendMeEmail', function(req, res){

    var _name = req.body.name;
    var _email = req.body.email;
    var _subject = req.body.subject;
    var _message = req.body.message;

    //implement your spam protection or checks. 

    var vala = sendEmailToMe(_name, _email, _subject, _message);
    if(vala) {
        res.status(200).send("eMail sent successfully");
    } else {
        res.status(500).send({error: "Could not send you eMail! "});
    }

});

sendEmailToMe = (name,email,subject,message) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'orisaydahub',
        pass: '0o3r9i0o'
      }
    });

    var mailOptions = {
      from: 'orisaydahub@gmail.com',
      to: 'orisayda@gmail.com',
      subject: subject,
      text: "Hey my name is "+name+" "+message
    };

    transporter.sendMail(mailOptions, (error, info) => {
       console.log(error);
       console.log(info);
      if (error!==null) {
        return error;
      } else {
        return true;
      }
    });
};

//
//app.post('/product', function(request, response) {
//    var product = new Product();
//    product.title = request.body.title;
//    product.price = request.body.price;
//    product.save(function(err, savedProduct) {
//       if (err) {
//           response.status(500).send({error:"Could not save product"});
//       } else {
//           response.send(savedProduct);
//       }
//    });
//});
//
//app.get('/product', function(request, response) {
//
//    Product.find({},function(err, products) {
//        if (err) {
//            response.status(500).send({error: "Could not fetch products"});
//        } else {
//            response.send(products);
//        }
//    });
//});
//
//app.get('/wishlist', function(request, response) {
//   WishList.find({}).populate({path:'products', model: 'Product'}).exec(function(err, wishLists) {
//       if (err) {
//           response.status(500).send({error:"Could not fetch wishlists"});
//       } else {
//           response.status(200).send(wishLists);
//       }
//   })
//});
//
//app.post('/wishlist/byTitle', function(request, response) {
//   WishList.find({"title": request.body.title}).populate({path:'products', model: 'Product'}).exec(function(err, wishLists) {
//       if (err) {
//           response.status(500).send({error:"Could not fetch wishlists"});
//       } else {
//           response.status(200).send(wishLists[0]);
//           
//       }
//   })
//});
//
//app.post('/wishlist', function(request, response) {
//    var wishList = new WishList();
//    wishList.title = request.body.title;
//    
//    console.log(request.body.title);
//    wishList.save(function(err, newWishList) {
//       if (err) {
//           response.status(500).send({error: "Could not create wishlist"});
//       } else {
//           response.send(newWishList);
//       }
//    });
//});
//
//
//app.put('/wishlist/products', function(request, response) {
//    if(typeof request.body.products != 'undefined' ) {
//      const list = request.body.products.map((product) => {
//	    Product.findOne({_id: product._id}, function(err, product) {
//       if (err) {
//           response.status(500).send({error:"Could not add item to wishlist"});
//       }
//    })
//    }, err => {
//        response.status(500).send({error:"Could not add item to wishlist"});
//    });
//    WishList.update({_id:request.body.wishListId}, {$set:{products: request.body.products}}, function(err, wishList) {
//               if (err) {
//                   response.status(500).send({error:"Could not add item to wishlist"});
//               } else {
//                   response.send("Successfully added to wishlist");
//               }
//           });  
//    } else {
//        WishList.update({_id:request.body.wishListId}, {$set:{products: []}}, function(err, wishList) {
//               if (err) {
//                   response.status(500).send({error:"Could not add item to wishlist"});
//               } else {
//                   response.send("Successfully added to wishlist");
//               }
//           });
//    }
//    
//});
//
//app.put('/wishlist/product/add', function(request, response) {
//   Product.findOne({_id: request.body.productId}, function(err, product) {
//       if (err) {
//           response.status(500).send({error:"Could not add item to wishlist"});
//       } else {
//           WishList.update({_id:request.body.wishListId}, {$addToSet:{products: product._id}}, function(err, wishList) {
//               if (err) {
//                   response.status(500).send({error:"Could not add item to wishlist"});
//               } else {
//                   response.send("Successfully added to wishlist");
//               }
//           });
//       }
//   })
//});
//
app.listen(3004, function() {
    console.log("Swag Shop API running on port 3004...");
});


app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

//app.listen(3004,'10.0.0.15', function() {
//    console.log("Swag Shop API running on port 3004...");
//});
