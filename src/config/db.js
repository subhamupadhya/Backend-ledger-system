const mongoose = require("mongoose")

function connectToDB() {

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected DB:", mongoose.connection.name)
        console.log("Full URI:", process.env.MONGO_URI)
    })
    .catch(err => {
        console.log("Error connecting to DB")
        console.log(err)
        process.exit(1)
    })

}

module.exports = connectToDB