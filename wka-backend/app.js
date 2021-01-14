const mongoose = require('mongoose');
const express = require('express');
const app = express();
/*build a connection to the Data Base*/
mongoose.connect('mongodb://wka:JeKxj1OJ0nU8@www.robert-magnus.de:27017/wka', 
{useNewUrlParser: true , useUnifiedTopology: true});

/*verification message that the DB is connected*/
mongoose.connection.on('connected',() =>{
    console.log("connected to WKA Database!!!!!")
}); 

/*create a new Schema*/
const wkaSchema = new mongoose.Schema({
    Latitude: Number,
    Longitude: Number,
},
{ collection : 'wka' });

/*create a new model */
const Wka = mongoose.model('Wka', wkaSchema);

/*get request for first Statistic*/
app.get('/firstStat', async function(req,res){
    Wka.find({},{"Leistung,N,13,3":1 , "Inbetriebn,D":1},function(err,foundItems){
        res.send(foundItems);
   });
});

/*get request for second Statistic*/
app.get('/secStat', async function(req,res){
    Wka.find({},{"Nabenhoehe,N,11,2":1 , "Rotordurch,N,11,2":1},function(err,foundItems){
        res.send(foundItems);
   });
});

/*get request for third Statistic*/
app.get('/thirdStat', async function(req,res){
    Wka.find({},{"PLZ,C,5":1 , "Leistung,N,13,3":1},function(err,foundItems){
        res.send(foundItems);
   });
});

/*get request for the map*/
app.get('/coordinates', async function(req,res){
    Wka.find({},{_id: 1, Longitude :1 ,Latitude:1, "Status,C,20": 1},function(err,foundItems){
        res.send(foundItems);
   });

});

/*get request for all the data (just for testing purposes)*/
app.get('/', async function (req,res){


    Wka.find({}, function(err,foundItems){
         res.send(foundItems);
    });
});

/*Rest API for that gives one WKA with specified ID */
app.route('/:givenId').
get(function (req,res){
    Wka.findOne({_id: req.params.givenId},function(req,foundWka){
    if(foundWka){
        res.send(foundWka);
    }
    else {
        res.send("wka doesn't exist");
    }
    })
})

/*backend server ist listening on port 5000*/
app.listen(5000, function(){
    console.log("server listening on Port 5000..");
})















// const fruitSchema =new  mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String
// });
// const personSchema= new mongoose.Schema({
//     name: String,
//     age: Number
// })

// const Fruit = mongoose.model("Fruit", fruitSchema);
// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     name: "schawn",
//     age: 37
// })
// const fruit = new  Fruit({
//     name: "banana",
//     rating: 5,
//     review: "amazing"
// });

// Fruit.find(function(err,fruits){
//     if(err){
//         console.log(err);
//     }
//     else{
        
//         fruits.forEach(function(fruit){
//             console.log(fruit.name);
//         });
//     }
