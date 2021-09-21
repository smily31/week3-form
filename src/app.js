require("dotenv").config();

// module requirement
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT;

const Form = require("./models/form");
require("./db/databaseConnection");


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "views"));       

// getting data from form and sending it to our database
app.post("/" , async(req,res) => {
    try{
        const data = new Form({
            email : req.body.email,
            fullname : req.body.fullname,
            phone : req.body.phone,
            discordname : req.body.discordname,
            challenge : req.body.challenge,
            link : req.body.link,
            submit : req.body.submit
        })
    
        const datafilled = await data.save();
        
        res.redirect("/");
    }catch(error){
        res.status(400).send(error);
    }
})

// showing submission details
app.get("/show" , async(req,res) => {
    try{
        const allData = await Form.find({});
        res.render("show", {allData: allData});
    }catch(error){
            res.status(404).send(error);
        }
    })
    
// displaying main form page
app.get("/",(req,res) => {
    res.render("index");
})

// configuring server
app.listen(port, (req,res) => {
    console.log(`server successfully running at port ${port} `);
})