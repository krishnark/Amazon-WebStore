var mongoose = require('mongoose');

var userSchema= new mongoose.Schema({
    profile : {
        username : {
            type : String,
            required : true,
            lowercase : true
        }
    },

    data : {
        oauth : { type : String, required : true},    // Facebook Oauth Id, allows user to login with facebook
        cart : [{
            product : {                               // List of products in the cart of a user
                type : mongoose.Schema.Types.ObjectId    //  ??????????????
            },
            quantity : {
                type : number,
                default : 1,
                min : 1
            }
        }]
    }
});

module.exports.userSchema = userSchema;