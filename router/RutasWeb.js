const express = require('express');
const router = express.Router();

router.get('/index', (req, res) => {
    // console.log(__dirname)
    res.render("index")
})

router.get('/experiencia', (req, res) => {
    // console.log(__dirname)
    res.render("experiencia")
})
router.get('/hobbies', (req, res) => {
    // console.log(__dirname)
    res.render("hobbies")
})
router.get('/formulario', (req, res) => {
    // console.log(__dirname)
    res.render("formulario")
})

module.exports = router;