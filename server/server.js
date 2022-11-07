const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const PORT=3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

app.get('/user',function(req,res){
    res.send('Hello from server');
})

app.post('/enroll', function(req, res){
    console.log(req.body);
    res.status(200).send({"message": "Data received"});
})

app.listen(PORT, function(){
    console.log("server running on localhost:"+ PORT);
});

