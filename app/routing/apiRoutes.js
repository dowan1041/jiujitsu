var path = require('path');
var galleryArray = require('../data/gallery');

module.exports = function (app) {

    app.get("/api/gallery", function (req, res) {
        res.json(galleryArray);
    });

    app.post("/api/gallery", function (req, res) {
      //this var is to compare new-search.
      // less difference will be matched
        var galleryUpdate = {
          title: "",
          photo: ""
        };
    
    
        // console.log(req.body);
        // console.log(userScores);
    
        var galleryData = req.body;
    
        galleryArray.push(galleryData);
    
        res.json(galleryUpdate);
      });
    
    }