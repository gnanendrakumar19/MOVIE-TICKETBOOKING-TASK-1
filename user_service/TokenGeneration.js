const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'panduhash';

app.use(express.json());

// Authentication endpoint
app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;

    // Authenticate user credentials
    // Assuming successful authentication
    const user = {
        //userId: ,
        //username: "",

    };

    const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

    res.json({ token });
});

// Start the server
app.listen(3030, () => {
    console.log('Server started on port 3030');
});