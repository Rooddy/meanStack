const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Big } = require('./big');

router.get('/',(req, res) =>{
  Big.aggregate([
      { $group: {
        _id: "$type",
        totalAmount: { $sum: {"$toDouble":"$amount"} },
        totalLiter: {$sum: {"$toDouble":"$totalliter"}},
        maxODM: { $max: "$ODM"},
        count:{$sum:1}
      }}]).sort({"count":-1}).exec(
      function(err, docs) {
      if(!err) {res.send(docs);}
      else{console.log('Error in Retriving big : ' + JSON.stringify(err, undefined, 2));}
    })
  });

module.exports = router;
