const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Big } = require('./big');

router.get('/', (req, res) => {
    Big.find().sort({date:-1}).exec((err, docs) => {
        if(!err) {res.send(docs);}
        else{console.log('Error in Retriving big : ' + JSON.stringify(err, undefined, 2));}
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Big.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Big :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req,res) =>{
    var big = new Big({
        date : req.body.date,
        type: req.body.type,
        store: req.body.store,
        amount : req.body.amount,
        ODM : req.body.ODM,
        literperprice: req.body.literperprice,
        description: req.body.description,
        totalliter: req.body.totalliter
    });
    big.save((err, doc) => {
        if(!err) {res.send(doc);}
        else{console.log('Error in big save : ' + JSON.stringify(err, undefined, 2));}
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var big ={
        date : req.body.date,
        type: req.body.type,
        store: req.body.store,
        amount : req.body.amount,
        ODM : req.body.ODM,
        literperprice: req.body.literperprice,
        description: req.body.description,
        totalliter: req.body.totalliter
    };

    Big.findByIdAndUpdate(req.params.id, { $set: big }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Car Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Big.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Car Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
