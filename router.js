const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController")

/*******************************
 *           REST API          *
 *******************************/


//memberga oid routerlar

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);


//other router

router.get("/", (req, res) => {
    res.send("home sahifasidasiz");
});
router.get("/menu", (req, res) => {
    res.send("menu sahifasidasiz");
});

router.get("/community", (req, res) => {
    res.send("Jamiyat sahifasidasiz");
});

router.get("/main", (req, res) => {
    res.send("Asosiy sahifadasiz!!!");
});

module.exports = router;