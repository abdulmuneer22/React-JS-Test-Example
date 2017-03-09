console.log("satrted the application")
var express = require("express");
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser());
const URL = "mongodb://localhost:27017/Story16202017"
var Chapter = require('./Models/Chapters.model')

var mongoose = require('mongoose');
mongoose.connect(URL)


var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Server  listening at http://%s:%s", host, port)
})

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next()
})


/********Chapter Selection */

var Chapter = require('./Models/Chapters.model')

app.get('/allChapters',(req,res)=>{
    Chapter.find({},(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).send()
        }
    })
})

app.get('/addChapter',(req,res)=>{
    var newChapter = new Chapter()
    newChapter.Chapter = 4
    newChapter.SubChapters = []
    newChapter.hasChildren = false
    newChapter.save((err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.send(err)
        }
    })
})

app.get('/SelectChapter/:Id/:Status',(req,res)=>{
    const ChapterID = req.param('Id')
    const Status = req.param('Status')
    console.log(Status)
    Chapter.findOneAndUpdate(
        {Chapter : ChapterID}, 
        {
            $set : {
                    isSelected : Status ? "true" : ""
                }
        },
        (err,doc)=>{
            if(!err){
                res.send(doc)
            }else{
                res.send(err)
            }
        }
            
            
            )
    
    
    //res.send(ChapterID)
})


