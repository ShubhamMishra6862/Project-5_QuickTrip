const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    username: String,
    email:String,
    password: String,
    booked:Array,
    history:Array
})

const User=mongoose.model('User',userSchema);

module.export={User}