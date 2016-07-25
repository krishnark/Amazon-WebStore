var mongoose = require('mongoode');
var category = require('./category')

var productSchema = new mongooseSchema({
    name : { type : String, required : true},
    price : {
        amount: {type: number, required: true},
        currency : {
            type : String,
            enum : [ 'USD', 'EUR', 'INR' ],
            required : true
        }
    },
    category : category.categorySchema    //      ?????????????????????????
});

//mongoose.model('product', productSchema, 'product');
module.exports.productSchema = productSchema;
