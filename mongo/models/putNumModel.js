const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const numberSchema = new Schema({
    _id: ObjectID,
    name: String,
    number: Number,
    date: Date
}, {collection: 'Numbers', timestamps: true})
const putNum = mongoose.model('putNum', numberSchema)
module.exports = putNum
