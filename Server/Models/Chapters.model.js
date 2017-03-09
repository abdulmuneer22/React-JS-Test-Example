'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema

var ChapterSchema = new Schema({
    Chapter : {
    type : Number,
    unique : true
},
isSelected : {
    type : Boolean,
    default : false
},
hasChildren : {
    type : Boolean,
    default : true
},
SubChapters : Array
})

module.exports =  mongoose.model('Chapter',ChapterSchema)