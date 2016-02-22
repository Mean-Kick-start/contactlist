var express=require('express');
var app = express();
var mongojs=require('mongojs');
var bodyparser=require('body-parser');
app.use(bodyparser.json());
var db = mongojs('contactlist',['contactlist']);
app.get('/contactlist', function(req, res){
    console.log('Hello listening to the get request');
   db.contactlist.find(function(err, docs){
       console.log(docs);
       res.json(docs);
   })
});
app.post('/contactlist' , function(req, res){
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, docs){
        res.json(docs);
    })
});
app.delete('/contactlist/:id' , function(req, res){
    var id= req.params.id;
    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err,docs){
        res.json(docs);
    })
});
app.get('/contactlist/:id' , function(req, res){
   var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, docs){
        res.json(docs);
    })
});
app.put('/contactlist/:id' , function(req, res){
  var id = req.params.id;
    console.log(req.body.name);
    db.contactlist.findAndModify({query:{_id: mongojs.ObjectId(id)},
        update: {$set: {name:req.body.name, number: req.body.number, gender:req.body.gender}},
        new: true},function(err,docs){
        res.json(docs);
    })
});
app.listen(3000);
console.log('Server 3000 is up and listening');