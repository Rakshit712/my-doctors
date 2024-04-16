const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
    name :{
        type:String,
        reuired:[true, "Please provide your full name"]
    },
    gender:{
        type:String,
        reuired:[true, "Please provide your gender"],
        enum :["Male","Female","Other"]
    },
    dateOfBirth:{
        type:Date,
        reuired:[true, "Please provide your date of birth"]
    },
    contactNo:{
        type:String,
        reuired:[true, "Please provide your contact number"],
        unique:[true,"Mobile number already in use"]
    },
    email:{
        type:String,
        reuired:[true, "Please provide your email"],
        unique:[true,"Email already in use"]
    },
    password:{
        type:String,
        reuired: true
    }
})

const Patient = mongoose.model("patient",patientSchema);
module.exports = {Patient};