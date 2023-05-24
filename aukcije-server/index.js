const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const {join} = require("path");

const app = express()
const port = 3000

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

app.post('/unosPredmeta', function (request, response) {
    const data = request.body;
    predmet = [[data.sifra_predmeta, data.naziv_predmeta,  data.opis_predmeta, data.slika, data.vrijeme_pocetka, data.vrijeme_zavrsetka, data.pocetna_cijena, data.svrha_donacije, data.id_korisnika, data.sifra_kategorije]]
    connection.query('INSERT INTO predmet (sifra_predmeta, naziv_predmeta,  opis_predmeta, slika, vrijeme_pocetka, vrijeme_zavrsetka, pocetna_cijena, svrha_donacije, id_korisnika, sifra_kategorije) VALUES ?', 
    [predmet], function (error, results, fields) {
      if (error) throw error;
      return response.send({ error: false, data: results, message: 'Predmet je dodan.' });
    });
  });

  app.get('/api/get-ponuda/:id', (req, res) => {
    const { id } = req.params;

    connection.query('SELECT id_ponude, vrijednost_ponude, DATE_FORMAT(vrijeme_ponude, "%Y-%m-%d %H:%i:%s") as vrijeme_ponude, id_korisnika FROM ponuda WHERE sifra_predmeta = ?', [id], (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

app.put('/api/update-price/:id', (req, res) => {
  const { id } = req.params;
  const { newPrice } = req.body;

  connection.query('UPDATE predmet SET pocetna_cijena = ? WHERE sifra_predmeta = ?', [newPrice, id], (error, results) => {
    if (error) throw error;
    res.send({ message: 'Price updated successfully.' });
  });
});

  app.post('/unostrenutnaponuda', function (request, response) {
    const data = request.body;
    predmet = [[  data.id_ponude, data.vrijednost_ponude, data.vrijeme_ponude, data.id_korisnika, data.sifra_predmeta]]
    connection.query('INSERT INTO ponuda (id_ponude, vrijednost_ponude,  vrijeme_ponude, id_korisnika, sifra_predmeta) VALUES ?', 
    [predmet], function (error, results, fields) {
      if (error) throw error;
      return response.send({ error: false, data: results, message: 'Dodali se trenutnu ponudu.' });
    });
  });

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})
