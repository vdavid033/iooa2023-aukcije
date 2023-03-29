const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'your-mysql-username',
  password: 'your-mysql-password',
  database: 'your-mysql-database'
});

// define a route to handle POST requests to insert data
app.post('/insert-data', (req, res) => {
  const { id_predmeta, naziv_predmeta, slika, vrijeme_pocetka, vrijeme_zavrsetka, pocetna_cijena, Kategorija } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to get a connection from the pool' });
    }

    const query = 'INSERT INTO predmet (id_predmeta, naziv_predmeta, slika, vrijeme_pocetka, vrijeme_zavrsetka, pocetna_cijena, Kategorija ) VALUES (?, ?)';
    connection.query(query, [id_predmeta, naziv_predmeta, slika, vrijeme_pocetka, vrijeme_zavrsetka, pocetna_cijena, Kategorija ], (err, result) => {
      connection.release();

      if (err) {
        return res.status(500).json({ error: 'Failed to insert data into the database' });
      }

      return res.status(200).json({ message: 'Data inserted successfully' });
    });
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
