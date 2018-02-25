// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const medalSchema = mongoose.Schema({
    year: String,
    type: String,
    city: String,
    event: String,
    category: String
})

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Judo', new Schema({
    id: String,
    name: String,
    country: String,
    birth: String,
    image: String,
    cover: String,
    link: String,
    medals: [medalSchema]
}));