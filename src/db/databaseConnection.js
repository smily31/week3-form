require("dotenv").config();

// setting up connction between mongoose and mongodb
const mongoose = require("mongoose");

mongoose.connect( process.env.mongouri , {
    useNewUrlParser : true, 
    useUnifiedTopology : true,
    useCreateIndex: true
}).then(() => {
    console.log("connection is successful");
}).catch((e) => {
    console.log("no connection due to :-> ",e);
})