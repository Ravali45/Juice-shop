const express=require('express');
var mongoose=require('mongoose');
const router=express.Router();
const juiceInfo= require('../models/juiceinfo');
const juiceDetails= require('../models/juicedetails');
const registration= require('../models/registration')
//get order details
router.get('/getorderdetails',(req,res,next)=>
{
    juiceInfo.find(function(err,juiceDetails){
        res.json(juiceDetails);

    })
});
router.get('/findordrdetails/:fromdate/:todate/:option',(req,res,next)=>
{
    console.log(req.params.fromdate);
    console.log(req.params.todate);
    console.log(req.params.option);
    let options=req.params.option+"";
//     juiceInfo.find({
//         // "date": {
//         //     $gt: req.params.fromdate,
//         //      $lt: req.params.todate
        
//         // },
//         'bill.name':req.param.option
// },function(err,getresp)
juiceInfo.find({$and:[{'date': {
        $gte: req.params.fromdate,
        $lte: req.params.todate        
}},{'bill.name':options}]},
function(err,getresp)
{

    res.json(getresp);

})

});
// to get all bills info
router.get('/getallbills/:fromdate/:todate',(req,res,next)=>
{
    console.log(req.params.fromdate);
    console.log(req.params.todate);
//     juiceInfo.find({
//         // "date": {
//         //     $gt: req.params.fromdate,
//         //      $lt: req.params.todate
        
//         // },
//         'bill.name':req.param.option
// },function(err,getresp)
juiceInfo.find({'date': {
        $gte: req.params.fromdate,
        $lte: req.params.todate        
}},
function(err,getallresp)
{

    res.json(getallresp);

})

});
//get juice information
router.get('/getjuicedetails',(req,res,next)=>
{
    juiceDetails.find(function(err,getjuicedetails){
        res.json(getjuicedetails);

    })
});


//add order
router.post('/bill',(req,res,next)=>
{
let newJuiceInfo = new juiceInfo({
    bill:req.body.bill,
    date:req.body.date,
    total_cost:req.body.total_cost


});
newJuiceInfo.save((err,juiceInfo)=>
{
if(err)
{
    res.json({msg:'failed to add order'+err})

}
else{

res.json({msg:'order added'})

}


})

});


//add juice 
router.post('/juice',(req,res,next)=>{
    
    juiceDetails.create(req.body,function(err,result)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })

})

// newjuiceDetails.save((err,juiceDetails)=>
// {
// if(err)
// {
//     res.json({msg:'failed to add order'+err})

// }
// else{

// res.json({msg:'order added'})

// }


// })





//delete contact
router.delete('/deletejuice/:id',(req,res,next)=>
{
    
    juiceDetails.deleteOne({_id:req.params.id},function(err,result)
{
if(err)
{
    res.json(err);

}
else
{
    console.log("deleted sucessfully");
    res.json(result);

}


})
})
//update content
router.put('/updatejuicedetails/:id',(req,res,next)=>{
    
    juiceDetails.findOneAndUpdate({_id:req.params.id},req.body,function(err,result)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })

})
// signup
router.post('/signup',(req,res,next)=>{
    registration.create(
        req.body,function(err,result)
        {
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(result);
            }
        }
    )
})
router.get('/login',(req,res,next)=>{
    registration.find(function(err,getlogin){
        res.json(getlogin);
    })
})

module.exports=router;
