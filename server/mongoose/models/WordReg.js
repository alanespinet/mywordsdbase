const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordRegsSchema = new Schema({
  word: {
    type: 'string',
    unique: true,
    required: true
  },
  definition: {
    type: 'string',
    required: true
  }
});

const WordReg = mongoose.model('WordReg', wordRegsSchema);
module.exports = WordReg;
