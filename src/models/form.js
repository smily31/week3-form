const mongooose = require("mongoose");
const validator = require("validator");

//defining a schema 
const formSchema = new mongooose.Schema({
    email : {
        type : String,
        required : true,
        unique : [true, "Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    fullname : {
        type : String,
        required : true,
        minlength : 3
    },
    phone : {
        type : Number,
        min : 10,
        required : true,
        unique : [true, "This phone number is already registered"]
    },
    discordname : {
        type : String,
        required : true,
        unique : true,
        // validate(value){
        //     if(!validator.isAlpha(value)){
        //         throw new Error("your discord name should contain # followed by some number")
        //     }
        // }
    },
    challenge : {
        type : String,
        required : true 
    },
    link : {
        type : String,
        required : true,
        unique : [true , "Kindly submit your own project "]
    },
    submit : {
        type : Boolean
    },
})

// creating a collection
const Form = new mongooose.model('Form', formSchema);

module.exports = Form;