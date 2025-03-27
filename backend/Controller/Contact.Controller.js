import validator from 'validator';
import Contact from "../Models/Contact.Model.js";

export const CreateContact = async (req, res) => {

    try {
        const { name, email, phone, message } = req.body;


        if (!name || !email || !phone) {
            return res.status(400).json({
                message: `${!name ? 'name is required' : !email ? 'email is required' : 'phone is required'}`,
                success: false,
            });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                message: 'Invalid email',
                success: false,
            });
        }

        if (!validator.isMobilePhone(phone)) {
            return res.status(400).json({
                message: `${phone} is not a valid phone number`,
                success: false,
            })
        }

        const newcontact = new Contact({
            name,
            email,
            phone,
            message,
            // message,
            status: 'pending'
        })

        const savedContact = await newcontact.save();
        if (savedContact) {
            return res.status(201).json({
                message: 'Contact created successfully',
                success: true,
                data: savedContact
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error',
            success: false,
        });
    } 
}

export const Getcontact = async(req , res ) => {
    try {
        const contacts = await Contact.find();
        res.json({
            message: 'All contacts',
            success: true,
            data: contacts
        });
    } catch (error) {
        console.log(error);
    }
}