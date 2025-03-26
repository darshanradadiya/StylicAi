import RegisterAdmin from "../Models/Register.Admin.Model.js";

export const CreateAdmin = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const adminRole = "admin";

    // ✅ Check if admin already exists
    const existingAdmin = await RegisterAdmin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin already exists",
        success: false,
      });
    }

    // ✅ Create new admin
    const newAdmin = new RegisterAdmin({
      name,
      email,
      phone,
      password,
      role: adminRole,
    });

    await newAdmin.save();

    // ✅ Generate token before sending response
    const token = await newAdmin.generateAuthToken();

    return res.status(201).json({
      message: "Admin created successfully",
      success: true,
      data: newAdmin,
      token, // ✅ Token included in the response
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};


export const getAllAdmins = async (req, res) => {
    try {
      const admins = await RegisterAdmin.find();
      res.status(200).json({
        message: "Admins fetched successfully",
        success: true,
        data: admins,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  };
  

  export const getAdminById = async (req, res) => {
    try {
      const admin = await RegisterAdmin.findById(req.params.id);
      if (!admin) {
        return res.status(404).json({
          message: "Admin not found",
          success: false,
        });
      }
      res.status(200).json({
        message: "Admin fetched successfully",
        success: true,
        data: admin,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  };
  