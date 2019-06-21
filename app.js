//importing modules
var express= require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');

// for using express
var app=express();
const route=require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/franschise');
mongoose.connection.on('connected',()=>
{
console.log("connected to mongodb ");
})

mongoose.connection.on('error',(err)=>
{
    if(err)
    {
        console.log("error in database connection:"+err);

    }

})


const port = 3000;
//adding middleware
app.use(cors());
app.use(bodyparser.json());
//static files
app.use(express.static(path.join(__dirname,'public')));
//routes
app.use('/api', route);
//testing server
app.get('/',(req,res)=>{
    res.send('foobar');
})
app.listen(port,()=>{
console.log("server started at port:"+port);
});
