import mongoose from 'mongoose';

const ContactSchema = mongoose.Schema({
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
    message:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    },
    enum: ['pending', 'completed', 'rejected'],
    status:{
        type: String,
        default: 'pending'
    }
},{
    timestamps: true
});

const contact = mongoose.model("Contact", ContactSchema);
export default contact;