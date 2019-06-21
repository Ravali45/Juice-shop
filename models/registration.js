const mongoose = require('mongoose');
const registration = mongoose.Schema(
{

name:{
type:String,
requied:true
},
password:{
type:String,
required:true
},
userid:{
 type:String,
 requied:true   
},
type:{
type:String,
requied:true    
}



});
const register=module.exports=mongoose.model('registration',registration);