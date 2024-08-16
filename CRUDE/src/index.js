const express = require("express")
const app = express()
const myCollection = require("./mongobd")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "hbs")

app.get("/", (req, res) => {
    res.render("home")
});
// For db insertion.....

// async function insert() {
//     try {
//         await myCollection.insertMany([{ name: "frontend_developer" }]);
//         console.log("Inserted");
//     } catch (err) {
//         console.log(err);
//     }
// }

// insert();

// Data read from db

// async function read() {
//     try {
//         const data = await myCollection.find({ name: "frontend_developer"})
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// read();


// Update in db
// async function update() {
//     try {
//         // const data = await myCollection.updateOne({ name: "frontend_developer"}, {$set:{name:"flutter_developer"}})
//         await myCollection.updateOne({ name: "frontend_developer"}, {$set:{name:"flutter_developer"}})

//         console.log("updated db");
//     } catch (err) {
//         console.log(err);
//     }
// }

// update();

async function deletefunc() {
    try {
        // const data = await myCollection.updateOne({ name: "frontend_developer"}, {$set:{name:"flutter_developer"}})
        await myCollection.deleteOne({ name: "backend_developer"})

        console.log("deleted successfully");
    } catch (err) {
        console.log(err);
    }
}

deletefunc();

app.listen(3000, (() => {
    console.log("port connected")
}))