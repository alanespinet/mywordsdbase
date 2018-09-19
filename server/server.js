const express = require('express');
const mongoose = require('./mongoose/mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const WordReg = require('./mongoose/models/WordReg');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 8080;

// MIDDLEWARES
app.use( bodyParser.urlencoded({
  extended: true
}) );

app.use( bodyParser.json() );
app.use( cors() );
app.use( express.static(publicPath) );

// REQUESTS
// add-word
app.post('/addword', (req, res, next) => {
  const word = new WordReg({
    word: req.body.word,
    definition: req.body.definition
  });

  word.save()
    .then( w => { res.send(w) })
    .catch( e => { res.status(400).send(e) });
});

// get-all-words
app.get('/getallwords', (req, res, next) => {
  WordReg.find()
    .then( ws => { res.send(ws) } )
    .catch( e => { res.status(400).send(e) });
});

// delete-word
app.post('/deleteword', (req, res, next) => {
  const w = req.body.word;

  WordReg.findOneAndRemove({ word: w })
    .then( ws => { res.send(ws) } )
    .catch( e => { res.status(400).send(e) });
});

// edit-word
app.post('/editword', (req, res, next) => {
  const w = req.body.word;
  const n_w = req.body.new_word;
  const n_d = req.body.new_definition;

  const upd = {
    word: n_w,
    definition: n_d
  };

  WordReg.findOneAndUpdate({ word: w }, upd)
    .then( ws => { res.send(ws) } )
    .catch( e => { res.status(400).send(e) });
});

// serve-react-app
app.get('*', (req, res, next) => {
  res.sendFile( path.join(publicPath, 'index.html') );
});

app.listen( port, () => {console.log('app is running')} );
