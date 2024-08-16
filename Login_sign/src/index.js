const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");

const tempeletePath = path.join(__dirname, '../tempelates')

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", tempeletePath);
app.use(express.urlencoded({extended:false}))


app.get("/sign_up", (req, res) => {
    res.render("sign_up" )
})
app.get("/", (req, res) => {
    res.render("login" )
})

app.post("/sign_up", async (req, res) => {
const data = {
    name: req.body.name,
    password: req.body.password,
}

await collection.insertMany([data])
res.render("home");

})

app.post("/login", async (req, res) => {
    // await collection.insertMany([data])
   try {
    const check = await collection.findOne({name: req.body.name})
    if(check.password === req.body.password) {
        res.render("home")
    }
    else{
         res.send("wrong Password")
    }
    res.render("home");
    
   } catch (error) {
    
   }
})

app.listen(8080, () => {
    console.log("port connected succesfully");
})