const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json()) // Parse JSON requests
app.use(bodyParser.urlencoded({ extended: true })) // Parse URL-encoded requests

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
})

app.get('/api/data', (req, res) => {
    // Get data from MySQL
    pool.query('SELECT * FROM data', (error, results) => {
        if (error) {
            console.error(error)
            res.status(500).send('Error retrieving data from database')
        } else {
            res.json(results)
        }
    })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
