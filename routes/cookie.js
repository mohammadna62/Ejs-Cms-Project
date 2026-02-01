const { signedCookies } = require("cookie-parser");
const express = require("express");
const { now } = require("mongoose");
const router = express.Router();

router.get("/set",(req , res )=>{
    const now = new Date()
  res.cookie("token", "mohammad",{
     httpOnly:true,//* just read by htto request
     maxAge:40000, // Ms
     //expires: new Date(now.getTime()+4000),
      secure : true,
      signed:true,// convert cookie value to hash code
      sameSite:"lax", // to perivent of attack to backend CSRF attack
  })

  res.status(200).json({message : "cookie Set successfully"})
});
router.get("/get",(req , res )=>{
console.log("cookies->",typeof (req.cookies));
res.json({
    cookies:req.cookies,
    signedCookies:req.signedCookies,
});// set property to show secure and signed cookies on browser
})
router.get("/get/:name",(req , res )=>{
console.log("cookies->",req.cookies);
res.json({cookie : req.cookies[req.params.name]})

});
// router.delete("/clear", (req, res) => {
router.get("/clear", (req, res) => {
  for (let property in req.cookies) {
   console.log(property);
    
    res.clearCookie(property);
  }
  res.json({ message: "Cookies removed successfully :))" });
});


module.exports = router;
