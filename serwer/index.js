//PODSTAWY
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())

//Port
const port = 3000

//Mysql 
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users"
})


//ERROR
con.connect(function (err) {
    if (err) {
        console.log(err)
    } else console.log("Połączo z bazą danych")
})

//Czy działa; odp w konsoli
app.get("/test", (req, res) => {
    res.send({"status": "ok"})
})

//Czy działa; odp w terminalu
app.listen(port, () => {
    console.log("Aplikacja działa na porcie:" + port)
})

//Zapytanie do bazy danych i wyświetlenie danych
app.get("/login", (req, res) => {
    const sql = "SELECT * FROM users"
    con.query(sql, function (err, result, fileds) {
        if (err) {
            console.log(err)
        } else res.send(result)
    })
})

// //Zapisywanie danych w bazie danych 
// app.get("/add/:imie/:nazwisko/:klasa", (req, res) => {
//     const imie = req.params.imie
//     const nazwisko = req.params.nazwisko
//     const klasa = req.params.klasa

//     const sql = `INSERT INTO uczniowie_budul (imie, nazwisko, klasa) VALUES ('${imie}','${nazwisko}','${klasa}')`
//     con.query(sql, function (err, result, fileds) {
//         if (err) {
//             console.log(err)
//         } else res.send("Dodano rekord")
//     })
// })



