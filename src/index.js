const express = require('express');
const { default: mongoose } = require('mongoose');

const route = require('./routes/route.js');
const app = express();

mongoose.connect("mongodb+srv://mdyousuf9007:5pshKMUEKE9DQzgX@cluster0.0ldwd.mongodb.net/yousuf9007-db", {
    useNewUrlParser: true
})
.then(() => console.log('mongodb running and connected'))
.catch(err => console.log(err)) 


app.use(express.json())
app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});






