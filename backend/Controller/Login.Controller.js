import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import RegisterAdmin from '../Models/Register.Admin.Model.js';

export const Login = async(req , res) => {
    try {
        const {email , password} = req.body;

        const admin = await RegisterAdmin.findOne({email});
        if(!admin){
            return res.status(400).json({
                message: "Admin not found!",
                success: false
            })
        }

        const isPasswordMatch = await bcrypt.compare(password , admin.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message: "Invalid credentials!",
                success: false
            })
        }

        const token = jwt.sign({
            _id : admin._id,
            email : admin.email,
            role : admin.role
        } , process.env.JWT_SECRET , {expiresIn: '7d'});
        res.json({
            message: "Login success!",
            token,
            data :{
                _id : admin._id,
                name : admin.name,
                email : admin.email,
                role : admin.role,
                token : token
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong!"});
    }
}