const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(function(req,res,next){
    const today=new Date();
    // console.log(today)
    let date=today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate();
    let time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    let ip=req.ip;
    let path=req.path;
    console.log(date +'\n'+time+'\n'+ip+'\n'+path);
    next();
});



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
