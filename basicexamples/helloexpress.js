var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var ejs = require('ejs')

var urlEncodedParser =  bodyParser.urlencoded({extended:false})

app.set('view engine','ejs')
app.set('views',__dirname + '/views')

app.get('/',function(req,res){
    // res.sendFile(__dirname+'/home.html')
    res.render('home',{})
})

app.get('/about',function(req,res){
    // res.sendFile(__dirname+'/about.html')
    console.log(req.query)
    res.render('about',{ urlData:req.query})
})

app.get('/contact',function(req,res){
    // res.sendFile(__dirname+'/contact.html')
    var contactData = {phone: 22515}
    res.render('contact',{data:contactData})
    
})
app.post('/contact',urlEncodedParser,function(req,res){
    console.log(req.body)
    res.send("Recieved Information" + JSON.stringify(req.body))
    // res.render('contactsuccess')
})
app.get('/profile/:name',function(req,res){
    // res.send("I am in profile page of " + req.params.id)
    var personData = {age:31,location :'Bangalore',hobbies:['swimming','driving','eating']}
    res.render('profile',{personName: req.params.name,
        data: personData
                        })
})

app.listen(8888)