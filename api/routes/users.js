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
        message:'response from users rout Dksingh'
    });}else{
        res.status(200).json({
            message:'You passed an id'
        });
    }
});

module.exports = router;