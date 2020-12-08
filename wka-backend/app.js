const mongoose = require('mongoose');
const express = require('express');
const app = express();
mongoose.connect('mongodb://wka:JeKxj1OJ0nU8@www.robert-magnus.de:27017/wka', 
{useNewUrlParser: true , useUnifiedTopology: true});

mongoose.connection.on('connected',() =>{
    console.log("connected to WKA Database!!!!!")
});


const wkaSchema = new mongoose.Schema({
    Latitude: Number,
    Longitude: Number,
},
{ collection : 'wka' });

const Wka = mongoose.model('Wka', wkaSchema);

app.get('/coordinates', async function(req,res){
    Wka.find({},{_id: 1, Longitude :1 ,Latitude:1},function(err,foundItems){
        res.send(foundItems);
   });

});
app.get('/', async function (req,res){


    Wka.find({}, function(err,foundItems){
         res.send(foundItems);
    });
});

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