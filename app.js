const express = require('express');
app = express();
const morgon = require('morgan');
const UserRoutes = require('./api/routes/users');
const CourseRoutes = require('./api/routes/courses');
const bodyParser = require('body-parser');


app.use(morgon('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept, Authorization');
    if(res.method === 'OPTIONS'){
        res.header('Access-Control-Allows-Methods','POST','GET','PUT,DELETE','PATCH');
        return res.status(200).json({});
    }
    next();
});


app.use('/users',UserRoutes) ;
app.use('/course',CourseRoutes);


app.use((req,res,next)=>{
    const error = new Error('Not Found')
    error.ststus = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports = app;