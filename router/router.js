var express = require('express');
var router  = express.Router();

var index = require('../data/index.json');
var service= require('../data/service.json');
var item = require('../data/item.json');
var comments= require('../data/comment.json')

router.get('/index',function(req,res){
    res.send(index)
})

router.get('/service',function(req,res){
    res.send(service)
})

router.get('/item',function(req,res){
    res.send(item)
})

router.get('/comment',function (req,res) {
    res.send(comments)
  /*  if (req.query.page){
        var page = req.query.page/1;
        var comment = comments.slice((page)*10,10*(page+1))
        res.send(comment)
    } else {
        var arr = []
        for (var i=1; i<= comments.length/10; i++){
            arr.push(i)
        }
        res.send(arr)
    }*/
})

module.exports = router;

