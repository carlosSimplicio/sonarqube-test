const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Olá galera</h1>')
})

module.exports = app