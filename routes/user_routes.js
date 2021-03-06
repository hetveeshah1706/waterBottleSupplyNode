var express=require('express');
var router=express.Router();
var user_router=require('../model/user_model');
router.get('/',function(req,res,next){
    user_router.getAllUsers(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.get('/:user_email',function(req,res,next){
    user_router.getUserByID(req.params.user_email,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.post('/',function(req,res,next){
    user_router.addUser(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.delete('/:user_email',function(req,res,next){
    user_router.deleteUser(req.params.user_email,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.put('/:user_email',function(req,res,next){
    user_router.updateUsers(req.params.user_email,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
module.exports=router;