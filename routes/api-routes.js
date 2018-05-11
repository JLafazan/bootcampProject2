// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var express = require('express')
var bodyParser = require('body-parser')
var db = require("../models");
var path = require('path');
fs = require('fs');

// Routes
// =============================================================
module.exports = function(app) {

        // GET route for getting all of the posts
        app.get("/api/posts/", function(req, res) {
            db.Post.findAll({})
                .then(function(dbPost) {
                    res.json(dbPost);
                });
        });

        // Get route for returning posts of a specific category
        app.get("/api/posts/category/:category", function(req, res) {
            db.Post.findAll({
                    where: {
                        category: req.params.category
                    }
                })
                .then(function(dbPost) {
                    res.json(dbPost);
                });
        });

        // Get route for retrieving a single post
        app.get("/api/posts/:id", function(req, res) {
            db.Post.findOne({
                    where: {
                        id: req.params.id
                    }
                })
                .then(function(dbPost) {
                    res.json(dbPost);
                });
        });

        // POST route for saving a new post
        app.post("/api/posts", function(req, res) {
            console.log(req.body);

            // use fs to save req.body.photo in /images

            db.Post.create({
                    title: req.body.title,
                    body: req.body.body,
                    category: req.body.category,
                    photo: req.body.photo,
                })
                .then(function(dbPost) {
                    res.json(dbPost);
                });
        });

        // DELETE route for deleting posts
        app.delete("/api/posts/:id", function(req, res) {
            db.Post.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(function(dbPost) {
                    res.json(dbPost);
                });
        });

        app.use(bodyParser.json({limit: '50mb'}));
        app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

        app.post('/upload', function(req, res) {
            console.log(req.body)

          var tempPath = req.files.file.path,
              targetPath = path.resolve('./uploads/' + req.files.file.name);

          console.log('\n\n in upload path \n')
          console.log('tempPath: ', tempPath)
          console.log('targetPath: ', targetPath)
          console.log(req.body);
    console.log(req.files);
          if (path.extname(req.files.file.name).toLowerCase() === '.png') {
            console.log('running rename')
              fs.rename(tempPath, targetPath, function(err) {
                  if (err) throw err;
                  console.log("Upload completed!");
              });
          } else {
            console.log('running unlink')
              fs.unlink(tempPath, function() {
                  if (err) throw err;
                  console.error("Only .png files are allowed!");

              });
          }

        });


    // PUT route for updating posts
    app.put("/api/posts", function(req, res) {
        db.Post.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });

    // app.post('/upload', function(req, res) {
    //     if (!req.files)
    //         return res.status(400).send('No files were uploaded.');

    //     // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    //     let sampleFile = req.files.sampleFile;

    //     // Use the mv() method to place the file somewhere on your server
    //     sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
    //         if (err)
    //             return res.status(500).send(err);

    //         res.send('File uploaded!');
    //     });
    // });


};