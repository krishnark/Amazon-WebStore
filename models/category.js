var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    _id : {type : String},
    parent : {
        type : String,
        ref : 'category'    //    ?????????????????
    },
    ancestors : [{
        type : String,
        ref : 'category'
    }]
});

//mongoose.model('category', categorySchema, 'category');
module.exports.categorySchema = categorySchema;
