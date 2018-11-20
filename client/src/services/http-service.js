import 'whatwg-fetch';
var fs = require('fs');
var path = require('path');
const httpUrl='http://localhost:3000/';
//const httpUrl='http://10.0.0.15:3004/';
class HttpService {

    getProducts = () => {
      var promiseGetProducts = new Promise((resolve, reject) => {
	   fetch(httpUrl+'product').then(response => {
            resolve(response.json());
        }) 
	});
	  return promiseGetProducts;
    }
    
    getProjects = (newFileName) => {
	    console.log(newFileName);
        var promiseProjects = new Promise((resolve, reject) => {
            fetch(httpUrl+'folder/projects', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
		     
              },
              body: JSON.stringify({
                "fileName": newFileName,
              })
           }).then(response => {
                resolve(response.json());
		     console.log(response.json());
           }) 
        });
	     console.log(promiseProjects);
        return promiseProjects;
    }
    
    sendEmailToMe = (name, email, subject, message) => {
        var promiseMailSend = new Promise((resolve, reject) => {
           fetch(httpUrl+'sendMeEmail', {
               method: 'POST',
	      
              headers: {
                'Content-Type': 'application/json',
		      
              },
              body: JSON.stringify({
                  "name": name,
                "email": email,
                "subject": subject,
                "message": message,
              })
           }) 
           });
        
        return promiseMailSend;
    }
    
    getContent = (newFileName) => {
        var promiseContent = new Promise((resolve, reject) => {
           fetch(httpUrl+'file/content', {
               method: 'POST',
		  
              headers: {
                'Content-Type': 'application/json',
		     
              },
              body: JSON.stringify({
                "fileName": newFileName,
              })
           }).then(response => {
               resolve(response.json()); 
           }) 
        });
        return promiseContent;
    }
    
     getFile = () => {
        var promiseFile = new Promise((resolve, reject) => {
           fetch(httpUrl+'resumeOS', { 
		  
		   headers: {
                'Content-Type': 'application/json',
		     
              }
		}).then(response => {
              resolve(response);  
           }) 
        });
        return promiseFile;
    }
    
     getImg = () => {
         var promiseAnImg = new Promise((resolve, reject) => {
           fetch(httpUrl+'resumeOS',{ 
		    
		   headers: {
                'Content-Type': 'application/json',
		      
              }
		}).then(response => {
                resolve(response.blob());
           }) 
        });
	  return promiseAnImg;
     }
     
//    getWishListByTitle = (wishListTitle) => {
//      var promiseGetWishList = new Promise((resolve, reject) => {
//           fetch('http://localhost:3004/wishlist/byTitle', {
//              method: 'POST',
//              headers: {
//                'Content-Type': 'application/json'
//              },
//              body: JSON.stringify({
//                "title": wishListTitle,
//              })
//           }).then(response => {
//                resolve(response.json());
//           }) 
//        });
//        
//	  return promiseGetWishList;
//    }
//    
//    createWishList = (wishListTitle) => {
//        var promiseGetWishList = new Promise((resolve, reject) => {
//           fetch('http://localhost:3004/wishlist', {
//              method: 'POST',
//              headers: {
//                'Content-Type': 'application/json'
//              },
//              body: JSON.stringify({
//                "title": wishListTitle,
//              })
//           }).then(response => {
//               resolve(response.json());
//           }) 
//        });
//        
//	  return promiseGetWishList;
//    }
//    
//    replaceToNewWishList = (products,newWishListId) => {
//        var promiseAddToWishList = new Promise((resolve, reject) => {
//           fetch('http://localhost:3004/wishlist/products', {
//              method: 'PUT',
//              headers: {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json'
//              },
//              body: JSON.stringify({
//                "products": products,
//                "wishListId": newWishListId,
//              })
//           })
//        });
//        return promiseAddToWishList;
//    }
//    
//    AddToWishList = (products,newWishListId) => {
//        var promiseAddToWishList = new Promise((resolve, reject) => {
//           fetch('http://localhost:3004/wishlist/product/add', {
//              method: 'PUT',
//              headers: {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json'
//              },
//              body: JSON.stringify({
//                "products": products,
//                "wishListId": newWishListId,
//              })
//           })
//        });
//        return promiseAddToWishList;
//    }
}

export default HttpService;
