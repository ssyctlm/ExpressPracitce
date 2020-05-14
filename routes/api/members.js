//* Create router  
//* Get All members

const express= require("express");
const router = express.Router();
const members = require("../../Members");

router.get('/',(req,res)=>{
  res.json(members)
})

//* Get single member
  // obtain request parameters  `req.params.id`
router.get('/:id',(req,res)=>{
  const check = members.some(member=> member.id === parseInt(req.params.id));
  // console.log(check)
  if(check){

    res.json(members.filter(member=>member.id === parseInt(req.params.id)))
  }else{
    res.status (400).json({
      message:`this member with id of ${req.params.id} doesn't exist`
    })
  }
})

module.exports = router;