const mongoose = require('mongoose');
const billschema = mongoose.Schema(
{
bill:[
{
name:{
type:String,
required:true
},
quantity:{
type:Number,
required:true
},
cost:{
type:Number,
required:true}
}
],
date:{
type:String,
requied:true
},
total_cost:{
type:Number,
required:true
}


});
const juicebills=module.exports=mongoose.model('Bill',billschema);
