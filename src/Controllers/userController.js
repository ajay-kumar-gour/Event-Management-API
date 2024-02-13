const User = require("../Models/userModels");
const isValidEmail = require("../Utils/emailCheck");
const bcrypt = require("bcrypt");
const registerController = async (req, res) => {
  try {
    const newUserData = req.body;
    console.log(newUserData);
    if (!isValidEmail(newUserData.email)) {
      return res.status(400).send({
        success: false,
        message: "Invalid email",
      });
    }
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
        createdNewUser,
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

const loginController = async (req, res) => {
  const userData = req.body;

  const checkExistingUser = await User.findOne({ email: userData.email });

  if (!checkExistingUser) {
    return res.status(404).send({
      success: false,
      message: "User does not exist with provided email",
    });
  }

  const isValidPassword = await bcrypt.compare(
    userData.password,
    checkExistingUser.password
  );

  if (!isValidPassword) {
    return res
      .status(400)
      .send({ success: false, message: "Invalid Password" });
  }

  res.status(200).send({
    success: true,
    message: "Login successfully",
    checkExistingUser,
  });
};

module.exports = { registerController, loginController };
