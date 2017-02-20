console.log("satrted the application")
var express = require("express");
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser());
var mongo = require('mongodb').MongoClient;

const URL = "mongodb://localhost:27017/Story16202017"

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Server  listening at http://%s:%s", host, port)
})

app.all('/cms/SaveInstructorTitle', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next()
})

app.all('/cms/GetTitle', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next()
})

app.post('/cms/SaveInstructorTitle', (req, res) => {

    const TitleValue = req.body.Title
    console.log(TitleValue)
    // Save this data to DB

    mongo.connect(URL, (err, db) => {
        if (!err) {
            db.collection('CMS_Instructor_Title').update({
                target: "Title"
            },
                {
                    $set: {
                        Title: TitleValue
                    }

                },
                (err, doc) => {
                    if (!err) {
                        console.log(doc)
                        res.status(201).send()
                    } else {
                        res.status(500).send()
                    }
                })
        }
    })


})


app.post('/cms/GetTitle',(req,res)=>{
    // Retrieves title from MongoBD for mentioned title
    const TargetTitle = req.body.target
    mongo.connect(URL, (err, db) => {
        if(!err){
            db.collection('CMS_Instructor_Title',(err,collection)=>{
                if(!err){
                    collection.find({
                        target : TargetTitle
                    }).toArray((err,docs)=>{
                        if(err){
                            console.log(err)
                            db.close()
                        }else{
                            res.send(docs)
                        }
                    })
                }else{
                    console.log(err)
                    res.status(500).send()
                }
            })
        }else{
            console.log(err)
            res.status(500).send()
        }
    });
    
})