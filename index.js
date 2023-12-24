const express = require('express');
const bodyParser = require('body-parser')
const ejs = require('ejs')
const path = require('path')
const mongoose = require('mongoose');
const mongodb = require('mongodb')



const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.use(express.json());
app.use("/public", express.static(__dirname + "/public"))
app.use(express.static(path.join(__dirname, 'public')))

//user api
const USERS = [{
    serverName: "server",
    Time: "current_Time",
    stateName: "state"
}]

//not found route
app.get('/not-found', (req, res) => {
    res.render('../Views/not-found.ejs')
})

//health api access
app.get('/health', (req, res) => {
    res.send(USERS)
})

//signup route
app.get('/sign-up', (req, res) => {
    res.render('../Views/sign-up/sign-up')
})

//login route
app.get('/login', (req, res) => {
    res.render('../Views/login/login')
})

//

//listen port
app.listen(4000, () => {
    mongoose
        .connect('mongodb+srv://shelkepallavi104:pallavi123@database1.ogcolbd.mongodb.net/?retryWrites=true&w=majority')
        .then(() => console.log("Connected to MongoDB"))
        .catch((error) => console.error("Error connecting to MongoDB:", error));
    console.log('done')
})