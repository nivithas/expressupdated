var express = require('express')
var mongoose = require('mongoose')
var userModel = require('./model/user')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
mongoose.connect("mongodb://localhost:27017/newdb")
var db = mongoose.connection
db.on('error',function(){
    console.log("error!!!")
})
db.once('open',function(){
    console.log("connected!!!")
})


app.get('/',function(req,res){
    res.send("hello from express")
})
app.get('/get',function(req,res){
    userModel.find({},function(err,data){
        if(err){
            res.send(err)
        }
        else{
            res.json(data)
        }
    })
})

app.get('/get/:location',function(req,res){
    var pathParam = req.params.location
    console.log(pathParam)
    userModel.find({location:pathParam},function(err,data){
        if(err){
            res.send(err)
        }
        else{
            res.json(data)
        }
    })
})
app.listen(8888)