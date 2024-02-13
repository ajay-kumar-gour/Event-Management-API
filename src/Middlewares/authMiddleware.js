const SECRET = process.env.SECRET;

const jsonwebtoken = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const bearerHeader = req.header("Authorization");
  console.log(bearerHeader);

  if (!bearerHeader) {
    return res.status(404).send({
      success: false,
      message: "Token missing",
    });
  }

  const part = bearerHeader.split(" ");
  console.log(part);
  const token = part[1];

  jsonwebtoken.verify(token, SECRET, (error, decoded) => {
    if (error) {
      console.log(error);
      return res.status(403).send({
        succes: false,
        message: "Invalid Token",
        error,
      });
    } else {
      console.log("Decoded Payload :", decoded);
    }

    next();
  });
};

module.exports = authenticateToken;
