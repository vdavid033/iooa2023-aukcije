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

    connection.query('SELECT sifra_predmeta, naziv_predmeta, slika, pocetna_cijena, vrijeme_zavrsetka, TIME_FORMAT( SEC_TO_TIME(TIMESTAMPDIFF(SECOND, vrijeme_pocetka, vrijeme_zavrsetka)), \'%H:%i:%s\' ) AS preostalo_vrijeme FROM predmet ORDER BY preostalo_vrijeme DESC\n', (error, results) => {
        if (error) throw error;

        res.send(results)
    })
})

app.get('/api/get-predmet/:id', (req, res) => {
    const { id } = req.params;

    connection.query('SELECT sifra_predmeta, naziv_predmeta, slika, pocetna_cijena, vrijeme_pocetka, vrijeme_zavrsetka, TIME_FORMAT( SEC_TO_TIME(TIMESTAMPDIFF(SECOND, vrijeme_pocetka, vrijeme_zavrsetka)), \'%H:%i:%s\' ) AS preostalo_vrijeme FROM predmet WHERE sifra_predmeta = ?', [id], (error, results) => {
        if (error) throw error;
        res.send(results)
    });
});


app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})
