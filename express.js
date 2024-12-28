const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');

const app = express();

// Middleware for logging
app.use(morgan('dev'));

// Middleware for data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Authentication middleware
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    jwt.verify(token, 'your_secret_key', (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
};

// Public route
app.get('/', (req, res) => {
    res.send('Welcome to the public route');
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the protected route!', user: req.user });
});

// Example route for handling form data
app.post('/submit', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Data received', data: req.body });
});

// Server setup
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
