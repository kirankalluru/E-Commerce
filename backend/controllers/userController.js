import userModel from '../models/userModel.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


//route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }

        // Find user by email
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User doesn't exist" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        // Create token if authentication is successful
        const token = createToken(user._id);

        res.status(200).json({ success: true, token });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};




//route for user registration

const registerUser = async (req,res)=>{

    try {
        const {name,email,password} = req.body;

        //checking user already exist or not

        const exist = await userModel.findOne({email})
        if(exist){
            return res.json({sucess:false,message:"user already exists"})
        }

        //validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({sucess:false,message:"please enter a valid email"})
        }

        if(password.length < 8)
        {
            return res.json({sucess:false,message:"please enter a strong password"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id)

        res.json({sucess:true,token})



    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:error.message})
        
    }
}

//route for admin login

const adminLogin = async (req,res)=>{
    try {
        
        const {email,password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD)
        {
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"invalid credentials"})
        }

    } catch (error) {
        res.json({sucess:false,message:error.message})
    }
}
export {loginUser,registerUser,adminLogin}