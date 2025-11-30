const express = require("express")
const User = require("../models/User")
const jwt = require("jsonwebtoken")


const router = express.Router()



router.post("/register", async (req, res)=>{
    const {name, email , password} = req.body

    try {
       let user = await User.findOne({email})

       if(user) return res.status(400).json({message: "User already exists"})

        user = new User({name , email, password})
        await user.save()

        res.status(201).json({
          message:"User created sucessfully"

        })
    }
    catch (error){
        console.log(error)
        res.status(500).send("Server Error")
    }
})


module.exports = router