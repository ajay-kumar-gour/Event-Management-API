const User = require("../Models/userModels");

const registerController = async (req, res) => {
  try {
    const newUserData = req.body;
    console.log(newUserData);

    const existingUser = await User.findOne({ email: newUserData.email });
    console.log(existingUser);
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already exist",
      });
    }

    const newUser = new User(newUserData);

    const createdNewUser = await newUser.save();
    if (createdNewUser) {
      res.status(201).send({
        success: true,
        message: "User registerned successfully",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { registerController };
