const express = require('express');
const app = express();
const dotenv = require("dotenv").config({path: __dirname + '/.env'});
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const seedDb = require('./seed');
const Visitor = require('./models/visitor');
const mail = require("./sendgrid");


mongoose.connect(process.env.MONGO_URL)
.then(()=>
    console.log('Database connected'))
.catch(()=> 
    console.log('Error in database connection'));

    //seedDb();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended:true }));
app.use(methodOverride('_method'));


app.get('/',(req,res)=>{
    res.send('connected');
})
app.get('/visitors', async(req,res)=>{

    const visitors = await Visitor.find();
    res.render('index',{visitors});
})

app.get('/visitors/new',(req,res) => {
    res.render('new');
});

app.post('/visitors', async(req,res)=>{

    const newVisitor = {
        ...req.body
    }

    await Visitor.create(newVisitor);

    const {email,firstname,check} = req.body;
    mail(email,firstname,check);
    
    res.redirect('/visitors');
});

app.get('/visitors/:id/update',async(req,res)=>{
    const {id} = req.params;

    const visitor = await Visitor.findById(id);

    res.render('update',{visitor});
});

app.patch('/visitors/:id', async(req,res)=>{
    const updatedVal = req.body;
    const {email,firstname,check} = req.body;
    const {id} = req.params;

    await Visitor.findByIdAndUpdate(id, updatedVal);
    mail(email,firstname,check);

    res.redirect('/visitors');
})



app.listen(3000,()=>{
    console.log('server running at http://localhost:3000/');
});
