const router = require('express').Router();
console.log('Routes running');

const Contacts = require('../db/models/dataschema');
const Users = require('../db/models/userSchema');
router.post('/create',(req,res)=>{


    var newContact = new Contacts({
        name:req.body.name,
        contact:req.body.contact,
        userid:req.query.userid
    });

    newContact.save((err,doc)=>{
        if(err){
            res.status(500).json({messgae:'Error on create Contact', err:err});
        }
        else{
            res.status(200).json({message:'New Contact Saved', doc:doc});
        }
        
    })
    
});

router.post('/login',(req,res)=>{
    Users.findOne({userid:req.body.userid, password:req.body.password},(err,doc)=>{
        if(!doc){
            res.status(500).json({message:'Invalid Credentials', err:err});
        }
        else{
            if(doc){
            res.status(200).json({message:'User Login Successfully', doc:doc, userid:doc.userid});
        }
        else{
            res.status(404).json({message:'server error'})
        }
        }
    })
})

router.post('/signup',(req,res)=>{
    Users.find({userid:req.body.userid},(err,doc)=>{
        if(err){
            res.status(500).json({message:'Server Error',err:err})
        }
        else{
            if(doc){
                res.status(200).json({message:'userid already exist'})
            }
            else{
                var newUser = new Users({
                    userid:req.body.userid,
                    password:req.body.password
                });
                newUser.save((err,doc)=>{
                    if(err){
                        res.status(500).json({message:'Error in user creation', err:err});
                    }
                    else{
                        res.status(200).json({message:'user Signup Successfully', doc:doc});
                    }
                })
            }
        }
    })

    
})

router.get('/read',(req,res)=>{
    Contacts.find({userid:req.query.userid},(err,doc)=>{
        if(err){
            res.status(500).json({messgae:'Error in find Contact'});
        }
        else{
            res.status(200).json({message:doc});
        }
    })
    
});
router.post('/update/:name',(req,res)=>{
    console.log(req.query.name);
    console.log(req.body.newName);
    console.log(req.body.newContact);
    Contacts.findOne({name:req.body.name,userid:req.query.userid},(err,doc)=>{
        if(err){
            res.status(500).json({messgae:'Error in find Contact'});
        }
        else{
            doc.name=req.body.newName;
            doc.contact=req.body.newContact;
            doc.save((err,doc)=>{
                if(err){
                    res.status(500).json({messgae:'Error in Update Contact'});
                }
                else{
                    res.status(200).json({message:doc});
                }
            })
        }
    })
    
});
router.post('/delete/:name',(req,res)=>{
    console.log(req.query.name);
    console.log(req.query.name);
    console.log(req.query);
    // res.status(200).json({message:'Delete is running'});
    Contacts.findOneAndRemove({name:req.body.name, userid:req.query.userid},(err,doc)=>{
        if(err){
            res.status(500).json({messgae:'Error in Delete Contact'});
        }
        else{
            res.status(200).json({message:'Contact Deleted',contact:doc});
        }
    })
})

module.exports = router;