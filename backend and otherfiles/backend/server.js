const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
const port = 3000;

server.use(cors());
server.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'abc_restaurant'
});

db.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MySQL database.');
  });

// Signup route
server.post('/signup', (req, res) => {
  const { username, email, password, role } = req.body;
  const sql = 'INSERT INTO user (username, email, password, role) VALUES (?, ?, ?, ?)';
  db.query(sql, [username, email, password, role], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving user data' });
    }
    res.status(200).json({ message: 'Signup successful' });
  });
});

// Add this to your server.js file
server.post('/login', (req, res) => {
  const { email, password, role } = req.body;

  // Query to check user credentials
  const query = 'SELECT * FROM user WHERE email = ? AND password = ? AND role = ?';
  db.query(query, [email, password, role], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length > 0) {
      // Authentication successful
      res.status(200).json({ message: 'Login successful', role: results[0].role });
    } else {
      // Authentication failed
      res.status(401).json({ message: 'Invalid credentials or role' });
    }
  });
});

// Routes for Reservations
// API route to handle reservation submissions
server.post('/reservations', (req, res) => {
  const { name, email, phone, serviceType, guests, date, time, requests } = req.body;

  // Validate input data
  if (!name || !email || !phone || !serviceType || !guests || !date || !time) {
    return res.status(400).json({ message: 'All required fields must be filled out' });
  }

  const sql = 'INSERT INTO reservations (name, email, phone, serviceType, guests, date, time, requests) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, email, phone, serviceType, guests, date, time, requests], (err, result) => {
    if (err) {
      console.error('Error saving reservation:', err);
      return res.status(500).json({ message: 'Error saving reservation' });
    }
    res.status(200).json({ message: 'Reservation saved successfully' });
  });
});


// API endpoint to get all reservations
server.get('/api/reservations', (req, res) => {
  connection.query('SELECT * FROM reservations', (err, results) => {
      if (err) {
          res.status(500).json({ error: 'Database query failed' });
          return;
      }
      res.json(results);
  });
});

server.patch('/reservations/:id', (req, res) => {
  const { status } = req.body;
  const query = 'UPDATE reservation SET status = ? WHERE id = ?';
  db.query(query, [status, req.params.id], (err, result) => {
    if (err) throw err;
    res.send({ affectedRows: result.affectedRows });
  });
});


// Search Endpoint
server.get('/search', (req, res) => {
  const { keyword, serviceType, facilityType, priceRangeMin, priceRangeMax, availability } = req.query;
  let query = 'SELECT * FROM services WHERE 1=1';

  if (keyword) {
    query += ` AND (name LIKE ? OR description LIKE ?)`;
  }
  if (serviceType) {
    query += ` AND serviceType = ?`;
  }
  if (facilityType) {
    query += ` AND facilityType = ?`;
  }
  if (priceRangeMin && priceRangeMax) {
    query += ` AND pricing BETWEEN ? AND ?`;
  }
  if (availability) {
    query += ` AND availability LIKE ?`;
  }

  const values = [
    ...(keyword ? [`%${keyword}%`, `%${keyword}%`] : []),
    ...(serviceType ? [serviceType] : []),
    ...(facilityType ? [facilityType] : []),
    ...(priceRangeMin && priceRangeMax ? [priceRangeMin, priceRangeMax] : []),
    ...(availability ? [`%${availability}%`] : [])
  ];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Error executing query: ', error);
      return res.status(500).json({ error: 'An error occurred' });
    }
    res.json(results);
  });
});

// Route to handle query submission
// Endpoint to handle query submission
server.post('/queries', (req, res) => {
  const { userId, queryText } = req.body;

  if (!userId || !queryText) {
    return res.status(400).json({ message: 'User ID and query text are required' });
  }

  const sql = 'INSERT INTO queries (userId, queryText) VALUES (?, ?)';
  db.query(sql, [userId, queryText], (err, results) => {
    if (err) {
      console.error('Error inserting query:', err);
      return res.status(500).json({ message: 'Error submitting query' });
    }
    res.status(201).json({ message: 'Query submitted successfully', queryId: results.insertId });
  });
});

// Route to get all queries
server.get('/queries', (req, res) => {
  db.query('SELECT * FROM queries', (err, results) => {
    if (err) {
      console.error('Error fetching queries:', err);
      return res.status(500).send('Error fetching queries');
    }
    res.json(results);
  });
});

// Endpoint to check rates and availability
server.get('/check-rates', (req, res) => {
  const { serviceType, facilityType, priceRangeMin, priceRangeMax } = req.query;

  let sql = 'SELECT * FROM services WHERE 1=1';
  
  if (serviceType) {
    sql += ` AND serviceType = ${mysql.escape(serviceType)}`;
  }
  
  if (facilityType) {
    sql += ` AND facilityType = ${mysql.escape(facilityType)}`;
  }
  
  if (priceRangeMin !== undefined && priceRangeMin !== null) {
    sql += ` AND pricing >= ${mysql.escape(priceRangeMin)}`;
  }
  
  if (priceRangeMax !== undefined && priceRangeMax !== null) {
    sql += ` AND pricing <= ${mysql.escape(priceRangeMax)}`;
  }

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching rates and availability:', err);
      res.status(500).send('Server error');
    } else {
      res.json(results);
    }
  });
});

// Search endpoint for hospitality services
server.post('/search', (req, res) => {
  const { serviceType, location, date } = req.body;

  let sql = `SELECT * FROM services WHERE 1=1`;

  // If the user specifies service type
  if (serviceType) {
      sql += ` AND service_type = '${serviceType}'`;
  }

  // If the user specifies a location
  if (location) {
      sql += ` AND location = '${location}'`;
  }

  // If the user specifies a date
  if (date) {
      sql += ` AND available_dates LIKE '%${date}%'`;
  }

  // Query the database
  db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
  });
});

// API endpoint to get query details
server.get('/api/query', (req, res) => {
  const query = 'SELECT id, userid, queryText FROM queries LIMIT 1'; // Adjust query as needed

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching query details:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results[0]); // Sending only the first result for simplicity
  });
});

//payment
server.post('/payments', (req, res) => {
  const { amount, paymentMethod, reservationId } = req.body;
  
  if (!amount || !paymentMethod || !reservationId) {
    return res.status(400).send('Missing required fields');
  }

  const query = 'INSERT INTO payments (amount, paymentMethod, reservationId) VALUES (?, ?, ?)';
  const values = [amount, paymentMethod, reservationId];
  
  db.query(query, values, (err, result) => {
    if (err) {
      return res.status(500).send('Database error');
    }
    res.status(201).send('Payment saved successfully');
  });
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

