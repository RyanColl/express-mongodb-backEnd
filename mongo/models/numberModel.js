const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const numberSchema = new Schema({
    name: String,
    number: Number,
    date: Date
}, {collection: 'Numbers', timestamps: true})
const Num = mongoose.model('Num', numberSchema)
module.exports = Num
