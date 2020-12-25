const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'response from course rout'
    });
});

router.get('/:CourseId',(req,res,next)=>{
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

router.patch('/:CourseId',(req,res,next)=>{
   res.status(200).json({
       message:'update project'
   });
});

router.delete('/:CourseId',(req,res,next)=>{
    res.status(200).json({
        message:'Delete project'
    });
 });

module.exports = router;