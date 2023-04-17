const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const dbConfig = require("./dbConfig");
var mysql = require('mysql');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
   }));
app.use(cors({origin: '*'}))

var dbConn = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
   });

// povezivanje na bazu podataka
dbConn.connect(); 


app.post('/unosPredmeta', function (request, response) {
    const data = request.body;
    predmet = [[data.sifra_predmeta, data.naziv_predmeta, data.slika, data.vrijeme_pocetka, data.vrijeme_zavrsetka, data.pocetna_cijena, data.svrha_donacije, data.id_korisnika, data.sifra_kategorije]]
    dbConn.query('INSERT INTO predmet (sifra_predmeta, naziv_predmeta, slika, vrijeme_pocetka, vrijeme_zavrsetka, pocetna_cijena, svrha_donacije, id_korisnika, sifra_kategorije) VALUES ?', 
    [predmet], function (error, results, fields) {
      if (error) throw error;
      return response.send({ error: false, data: results, message: 'Predmet je dodan.' });
    });
  });
  
// Postavljanje porta
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
   });
   module.exports = app;
   
