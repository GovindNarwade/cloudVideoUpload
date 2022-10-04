const express = require('express');
const multer = require('multer');
const {uploadImage,getListFiles,download} = require('../controller/Video_controller');
const router = express.Router();
// Setting up multer as a middleware to grab photo uploads

// POST - Add Image to Cloud Storage

router.route('/upload').post( uploadImage);
router.route('/getListFiles').post( getListFiles);
router.route('/download').post( download);

module.exports = router