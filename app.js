console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router.js");
const router_bssr = require("./router_bssr.js");


let session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore ({
    uri: "mongodb+srv://akramovsardor93:dpse5wJhF2aIq1tD@cluster0.k40qhfh.mongodb.net/Papay",
    collection: "sessions",
});

//1 Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session code

// app.use(cookieSession({maxAge: (24 * 60 * 60 * 1000), keys: [keys['sessions.cookieKey']]}));


// app.use(
//     session({
//         // secret: process.env.SESSION_SECRET,
//         cookie: {
//             maxAge: 1000*60*30,
//         },
//         store: store,
//         resave: true,
//         saveUninitialized: true,
//     })
// );

//3: Views code

app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
app.use("/resto", router_bssr);
app.use("/", router);



module.exports = app;