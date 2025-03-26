import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


const RegisterAdminSchema = mongoose.Schema({
    _ID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['admin', 'User'],
        default: 'admin'
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]
},{
    timestamps: true
});

RegisterAdminSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 15);
    }
    next();
})

console.log("SECRET_KEY:", process.env.SECRET_KEY);

RegisterAdminSchema.methods.generateAuthToken = async function () {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }
        let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
        throw error; // Re-throw the error to handle it in the controller
    }
};
const RegisterAdmin = mongoose.model("RegisterAdmin", RegisterAdminSchema);
export default RegisterAdmin;