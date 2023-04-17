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
    database: "17.04.2023"
})


//ERROR
con.connect(function (err) {
    if (err) {
        console.log(err)
    } else console.log("Połączo z bazą danych")
})

//Czy działa; odp w konsoli
app.get("/", (req, res) => {
    res.send("ok")
})

//Czy działa; odp w terminalu
app.listen(port, () => {
    console.log("Aplikacja działa na porcie:" + port)
})

//Zapytanie do bazy danych i wyświetlenie danych
app.get("/select", (req, res) => {
    const sql = "SELECT * FROM użytkownicy"
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



