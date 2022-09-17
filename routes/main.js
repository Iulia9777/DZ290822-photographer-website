const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const uploads = multer({ dest: 'uploads/' });

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/uploads', (req, res) => {
    res.render('uploads');
});

//загружаем по одной фотографии
router.post('/uploads', uploads.single('photo'), function(req, res, next){
    const filedata = req.file;
        if(!filedata)
            res.send("Error uploading file");
        else
            res.send('gallery');
            console.log(filedata);
 });
 
//загружаем несколько фотографий
 router.post('/uploads', uploads.array('photo', 2), function(req, res, next){
     const file = req.file;
     res.send('Uploaded');
  });

router.use((req, res, next) => {
    console.log('URL:', req.url); 
    next();  
});

module.exports = router;