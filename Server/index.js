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

app.all('/cms/GetTitle/IRT', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next()
})

app.all('/cms/GetTitle/IRTC', (req, res, next) => {
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


app.all('/cms/SaveInstructorTitleCopy', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next()
})

app.post('/cms/SaveInstructorTitleCopy', (req, res) => {

    const TitleValue = req.body.Title
    console.log(TitleValue)
    // Save this data to DB

    mongo.connect(URL, (err, db) => {
        if (!err) {
            db.collection('CMS_Instructor_Title_Copy').update({
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


app.post('/cms/GetTitle/IRT',(req,res)=>{
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



app.post('/cms/GetTitle/IRTC',(req,res)=>{
    // Retrieves title from MongoBD for mentioned title
    const TargetTitle = req.body.target
    mongo.connect(URL, (err, db) => {
        if(!err){
            db.collection('CMS_Instructor_Title_Copy',(err,collection)=>{
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


/********* Site Settings End Points *******/

app.all('/cms/sitesettings/setfilterlabel', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next()
})

app.all('/cms/sitesettings/getfilterlabel', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next()
})



app.post('/cms/sitesettings/setfilterlabel', (req, res) => {

    const FilterLabelValue = req.body.FilterLabel
    console.log(FilterLabelValue)
    // Save this data to DB

    mongo.connect(URL, (err, db) => {
        if (!err) {
            db.collection('FilterLabel').update({
                target: "filter_label"
            },
                {
                    $set: {
                        value: FilterLabelValue
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

app.post('/cms/sitesettings/getfilterlabel',(req,res)=>{
    // Retrieves title from MongoBD for mentioned title
    const target = req.body.target
    mongo.connect(URL, (err, db) => {
        if(!err){
            db.collection('FilterLabel',(err,collection)=>{
                if(!err){
                    collection.find({
                        target : target
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


/****** Universal Functios for all collections *******/
app.all('/cms/getData', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next()
})

app.all('/cms/setData', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next()
})



app.post('/cms/getData', (req, res) => {
  const _collection = req.body.collection
  const field =  req.body.field

  mongo.connect(URL, (err, db) => {
      if(!err){
          db.collection(_collection,(err,collection)=>{
              if(!err){
                  collection.find({
                      target : field
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
app.post('/cms/setData', (req,res)=>{
  const _collection = req.body.collection
  const _target = req.body.target
  const _value = req.body.value

  mongo.connect(URL, (err, db) => {
      if (!err) {
          db.collection(_collection).update({
              target: _target
          },
              {
                  $set: {
                      value: _value
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
