const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crude_op',{
   
    // useUnifiedTopology: true,
    family: 4,
})

.then(() => {
    console.log("mongodb connected successfully")
})
.catch((error) => {
    console.log("error:", error)
});


const crude_schema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    }
})

const collection = new mongoose.model("myCollection", crude_schema)

module.exports = collection