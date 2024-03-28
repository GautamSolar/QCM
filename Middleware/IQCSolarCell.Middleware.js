const JWT = require('jsonwebtoken');
require('dotenv').config()



const RoleAuthentication = async(req,res,next)=>{
  const {token} = req.body;
   
  /** Verifying Token */
  try{
    const DecodeData = JWT.verify(token,process.env.SecretKey);
    /** Passing Decoded Data in Response Body */
    req.body.PersonID = DecodeData['PersonID']
    req.body.Designation = DecodeData['Designation']
    req.body.Department = DecodeData['Department']
    next()
  }catch(err){
    res.status(401).send({err})
  }
  

  
  
}

module.exports = {RoleAuthentication}