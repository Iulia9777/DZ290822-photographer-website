const express = require('express');
const mainRouter = require('./routes/main');
const server = express();
//const createError = require('http-errors')
//const multer  = require('multer')
//const upload = multer({ dest: 'uploads/' })

//шаблонизатор ejs
server.set('view engine', 'ejs');
server.set('views', './views');

//static server
server.use(express.static('./public'));

//routes
server.use('/', mainRouter);

//робимо сторінку 404
server.use((req, res, next) => {
    res.statusCode = 404;
   res.render('404');
});

server.listen(3000);

