/**
 * @fileoverview app.js
 * @name app.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
var express = require('express');
var controller = require('./route');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/admin',controller.get);
app.post('/admin', controller.post);

app.listen(8080);
