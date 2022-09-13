const express=require('express');
const path=require('path');
const { name } = require('pug/lib');
const app=express();
const bodyparser=require("body-parser");

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:8000/contactdance');
}

const contactSchema = new mongoose.Schema({
    name: String,
    phone:String,
    address:String,
    moreinfo:String
  });

const contact = mongoose.model('contact', contactSchema);


const port =8000;

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.post('/contact', (req, res)=>{
    var mydata = new contact(req.body);
    mydata.save().then(()=>{
        res.send("data save to the database")
    }).catch(()=>{
        res.status(400).send("item was not save to the data base")
    });
    // res.status(200).render('contact.pug');
})
 
// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});