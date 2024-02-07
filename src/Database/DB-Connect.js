const mongoose = require("mongoose");

const DBNAME = process.env.DBNAME;
const MONGODB_URI = process.env.MONGODB_URI;
async function  connectToDB() {
    try {
        console.log("Complete CONNECTION URI",`${MONGODB_URI}/${DBNAME}`)
        const connection = await mongoose.connect(`${MONGODB_URI}/${DBNAME}`)
        console.log("conncection instance HOST :", connection.connections[0].host);
        console.log("conncection instance CONNECTION String : ", connection.connections[0]._connectionString);
        console.log("connected to MONGO DB.".green.bold.bgBrightWhite);

    }
    catch(error) {
        console.log(`DB Conncection Error : ${error}`.red.bold);
    }
}


module.exports = connectToDB;