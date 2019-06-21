const mongoose = require('mongoose');
const juiceschema = mongoose.Schema(
{

name:{
type:String,
requied:true
},
cost:{
type:Number,
required:true
}


});
const juiceinfo=module.exports=mongoose.model('juicedetails',juiceschema);
