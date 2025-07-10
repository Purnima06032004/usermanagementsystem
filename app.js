require("dotenv").config();

const express = require("express");
const expresslayout= require("express-ejs-layouts");
const connectDB = require("./server/config/db");

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.use(
//     session({
//         secret: 'secret',
//         resave: false,
//         saveUnintialized: true,
//         cookie:{
//             maxAge:1000*60*60*24*7
//         }
//     })
// );

// app.use(flash({ sessionKeyName : 'flashMessage'}))

app.use(expresslayout);
app.set("layout", "layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/customer"));


app.get("/", (req, res) => {
    res.status(404).render("404");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});                 