const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'response from users rout'
    });
});

router.get('/:userId',(req,res,next)=>{
    const id = req.params.userId;
    if(id === 'dksingh'){
    res.status(200).json({
        message:'response from users rout Dksingh',
        id:id
    });}else{
        res.status(200).json({
            message:'You passed an id'
        });
    }
});

router.patch('/:userId',(req,res,next)=>{
   res.status(200).json({
       message:'update project'
   });
});

router.delete('/:userId',(req,res,next)=>{
    res.status(200).json({
        message:'Delete project'
    });
 });

 router.post('/:userId',(req,res,next)=>{
     const user = {
         name: req.body.email,
         price:req.body.password
     }
    res.status(201).json({
        message:user
    });
 });
 
module.exports = router;