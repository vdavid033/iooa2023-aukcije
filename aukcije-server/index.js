const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const {join} = require("path");

const app = express()
const port = 3306

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({origin: '*'}))

const connection = mysql.createConnection({
    host: 'student.veleri.hr',
    user: 'iooa-aukcije',
    password: '11',
    database: 'iooa-aukcije'
});

connection.connect()

app.get('/api/all-korisnik', (req, res) => {

    connection.query('SELECT * FROM korisnik', (error, results) => {
        if (error) throw error;

        res.send(results)
    })
})

app.get('/api/all-predmet', (req, res) => {

    connection.query('SELECT * FROM `predmet` ORDER BY vrijeme_zavrsetka DESC', (error, results) => {
        if (error) throw error;

        res.send(results)
    })
})

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})
