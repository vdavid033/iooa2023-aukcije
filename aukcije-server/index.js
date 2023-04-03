const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = 3306

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({origin: '*'}))

const dbConn = mysql.createConnection({
    host: 'student.veleri.hr',
    user: 'iooa-aukcije',
    password: '11',
    database: 'iooa-aukcije'
});

dbConn.connect()

app.get('/api/all-korisnik', (req, res) => {

    dbConn.query('SELECT * FROM korisnik', (error, results) => {
        if (error) {
            console.error(error)
            res.status(500).send('Error retrieving data from database')
        } else {
            console.log(res.json(results))
            res.json(results)
        }
    })
})

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})
