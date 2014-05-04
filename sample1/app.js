/**
 * @fileoverview app.js
 * @name app.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
var express = require('express');
var controller = require('./route');
var app = express();

app.use(express.static(__dirname + '/static'));

//collections of MongoDB
app.get('/collections', controller.collections);

//list of collection
app.get('/list', controller.list);

//----------------------------------------------
//document of collection
app.get('/document', controller.get);
//document update
app.post('/document', controller.post);

app.listen(8080);
