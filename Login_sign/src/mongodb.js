const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Login_db")
.then(() => {
    console.log("mongodb connected");
}).catch((err) => {
    console.log("failed to connected mongo db");
});

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model("Collection12", LogInSchema);

module. exports = collection;