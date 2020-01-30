const mongoose = require('mongoose');

var Big = mongoose.model('Big', {
    date : { type : String},
    type: {type: String},
    store: {type: String},
    amount : {type : String},
    ODM: {type:Number},
    literperprice: {type:String},
    description: {type: String},
    totalliter:{type: String}
});



module.exports = { Big };
