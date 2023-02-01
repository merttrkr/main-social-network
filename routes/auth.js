const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.get("/register", async(req,res)=>{
    const user = await new User({
        userName:"john",
        email:"test@testmail.com",
        paswword:"123456"
    })
    await user.save();
    res.send("ok")
});

module.exports = router