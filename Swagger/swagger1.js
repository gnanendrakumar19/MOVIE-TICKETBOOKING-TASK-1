// const mysql = require('mysql2');
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');

// var mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Y18ACE482@ngk',
//     database: 'TICKET_BOOKING'
// });

// mysqlConnection.connect((err) => {
//     if (!err)
//         console.log('DB connection succeeded.');
//     else
//         console.log('DB connection failed\n error: ' + JSON.stringify(err, undefined, 2));
// });

// app.listen(2023, () => console.log('Express server is running at port no: 2023'));

// const swaggerOptions = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'MovieTicketBooking Swagger Documentation In NODE.js',
//             version: '1.0.0'
//         },
//         servers: [
//             {
//                 url: 'http://localhost:2023'
//             }
//         ]
//     },
//     apis: [__filename] // Specify the current file as the source for Swagger specifications
// };

// const swaggerSpec = swaggerJSDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     User:
//  *       type: object
//  *       properties:
//  *         UserID:
//  *           type: string
//  *         Name:
//  *           type: string
//  *         Password:
//  *           type: string
//  *         Email:
//  *           type: string
//  *         Phone:
//  *           type: string
//  *
//  * /user:
//  *   get:
//  *     summary: Get all users from MySQL
//  *     description: Retrieve data from MySQL
//  *     responses:
//  *       '200':
//  *         description: Data retrieved successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/User'
//  */

// app.get('/user', (req, res) => {
//     mysqlConnection.query('SELECT * FROM USER', (err, rows, fields) => {
//         if (!err) {
//             res.status(200).json(rows);
//         } else {
//             console.log(err);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     });
// });





const mysql = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Y18ACE482@ngk',
    database: 'TICKET_BOOKING'
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeeded.');
    else
        console.log('DB connection failed\n error: ' + JSON.stringify(err, undefined, 2));
});

app.listen(2023, () => console.log('Express server is running at port no: 2023'));

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MovieTicketBooking Swagger Documentation In NODE.js',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:2023'
            }
        ]
    },
    apis: ['./swagger1.js']
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerSpec));

// -----------------------------------------------USER-----------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         UserID:
 *           type: string
 *         Name:
 *           type: string
 *         Password:
 *           type: string
 *         Email:
 *           type: string
 *         Phone:
 *           type: string
 *
 * /user:
 *   get:
 *     summary: Get all users from MySQL
 *     description: Retrieve data from MySQL
 *     responses:
 *       '200':
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

app.get('/user', (req, res) => {
    mysqlConnection.query('SELECT * FROM USER', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /user/{UserID}:
 *   get:
 *     summary: Get user by UserID from MySQL
 *     description: Retrieve user data by UserID from MySQL
 *     parameters:
 *       - in: path
 *         name: UserID
 *         required: true
 *         description: Numeric ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: User data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/user'
 */

app.get('/user/:UserID', (req, res) => {
    mysqlConnection.query('SELECT * FROM USER WHERE UserID = ?', [req.params.UserID], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user in MySQL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       '200':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'

 * /user/{UserID}:
 *   put:
 *     summary: Update an existing user by UserID
 *     description: Update an existing user in MySQL by UserID
 *     parameters:
 *       - in: path
 *         name: UserID
 *         required: true
 *         description: Numeric ID required
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       '200':
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'

 *   delete:
 *     summary: Delete a user by UserID
 *     description: Delete a user from MySQL by UserID
 *     parameters:
 *       - in: path
 *         name: UserID
 *         required: true
 *         description: Numeric ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

app.post('/user', (req, res) => {
    const { UserID, Name, Password, Email, Phone } = req.body;
    const query = 'INSERT INTO USER (UserID, Name, Password, Email, Phone) VALUES (?, ?, ?, ?, ?)';
    const values = [UserID, Name, Password, Email, Phone];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'User created successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.put('/user/:UserID', (req, res) => {
    const { UserID } = req.params;
    const { Name, Password, Email, Phone } = req.body;
    const query = 'UPDATE USER SET Name = ?, Password = ?, Email = ?, Phone = ? WHERE UserID = ?';
    const values = [Name, Password, Email, Phone, UserID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'User updated successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.delete('/user/:UserID', (req, res) => {
    const { UserID } = req.params;
    const query = 'DELETE FROM USER WHERE UserID = ?';

    mysqlConnection.query(query, [UserID], (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});



// app.post('/user', (req, res) => {
//     // Handle POST request to create a new user
//     // ...
// });

// app.put('/user/:UserID', (req, res) => {
//     // Handle PUT request to update an existing user by UserID
//     // ...
// });

// app.delete('/user/:UserID', (req, res) => {
//     // Handle DELETE request to delete a user by UserID
//     // ...
// });


// -----------------------------------------------ADMIN-----------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       properties:
 *         AdminID:
 *           type: string
 *         Name:
 *           type: string
 *         Password:
 *           type: string
 *         Email:
 *           type: string
 *         Phone:
 *           type: string
 *
 * /admin:
 *   get:
 *     summary: Get all admins from MySQL
 *     description: Retrieve data from MySQL
 *     responses:
 *       '200':
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Admin'
 */

app.get('/admin', (req, res) => {
    mysqlConnection.query('SELECT * FROM ADMIN', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /admin/{AdminID}:
 *   get:
 *     summary: Get admin by AdminID from MySQL
 *     description: Retrieve admin data by AdminID from MySQL
 *     parameters:
 *       - in: path
 *         name: AdminID
 *         required: true
 *         description: Admin ID required
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Admin data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Admin'
 */

app.get('/admin/:AdminID', (req, res) => {
    mysqlConnection.query('SELECT * FROM ADMIN WHERE AdminID = ?', [req.params.AdminID], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /admin:
 *   post:
 *     summary: Create a new admin
 *     description: Create a new admin in MySQL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       '200':
 *         description: Admin created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'

 * /admin/{AdminID}:
 *   put:
 *     summary: Update an existing admin by AdminID
 *     description: Update an existing admin in MySQL by AdminID
 *     parameters:
 *       - in: path
 *         name: AdminID
 *         required: true
 *         description: Admin ID required
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       '200':
 *         description: Admin updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'

 *   delete:
 *     summary: Delete an admin by AdminID
 *     description: Delete an admin from MySQL by AdminID
 *     parameters:
 *       - in: path
 *         name: AdminID
 *         required: true
 *         description: Admin ID required
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Admin deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

app.post('/admin', (req, res) => {
    const { AdminID, Name, Password, Email, Phone } = req.body;
    const query = 'INSERT INTO ADMIN (AdminID, Name, Password, Email, Phone) VALUES (?, ?, ?, ?, ?)';
    const values = [AdminID, Name, Password, Email, Phone];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Admin created successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.put('/admin/:AdminID', (req, res) => {
    const { AdminID } = req.params;
    const { Name, Password, Email, Phone } = req.body;
    const query = 'UPDATE ADMIN SET Name = ?, Password = ?, Email = ?, Phone = ? WHERE AdminID = ?';
    const values = [Name, Password, Email, Phone, AdminID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Admin updated successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.delete('/admin/:AdminID', (req, res) => {
    const { AdminID } = req.params;
    const query = 'DELETE FROM ADMIN WHERE AdminID = ?';

    mysqlConnection.query(query, [AdminID], (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Admin deleted successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});


// ---------------------------------------CITY TABLE -----------------------------------------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       properties:
 *         CityID:
 *           type: string
 *         Name:
 *           type: string
 *         State:
 *           type: string
 *         Zipcode:
 *           type: string
 *
 * /city:
 *   get:
 *     summary: Get all cities from MySQL
 *     description: Retrieve data from MySQL
 *     responses:
 *       '200':
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/City'
 */

app.get('/city', (req, res) => {
    mysqlConnection.query('SELECT * FROM CITY', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /city/{CityID}:
 *   get:
 *     summary: Get city by CityID from MySQL
 *     description: Retrieve city data by CityID from MySQL
 *     parameters:
 *       - in: path
 *         name: CityID
 *         required: true
 *         description: City ID required
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: City data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/City'
 */

app.get('/city/:CityID', (req, res) => {
    mysqlConnection.query('SELECT * FROM CITY WHERE CityID = ?', [req.params.CityID], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /city:
 *   post:
 *     summary: Create a new city
 *     description: Create a new city in MySQL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/City'
 *     responses:
 *       '200':
 *         description: City created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'

 * /city/{CityID}:
 *   put:
 *     summary: Update an existing city by CityID
 *     description: Update an existing city in MySQL by CityID
 *     parameters:
 *       - in: path
 *         name: CityID
 *         required: true
 *         description: City ID required
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/City'
 *     responses:
 *       '200':
 *         description: City updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'

 *   delete:
 *     summary: Delete a city by CityID
 *     description: Delete a city from MySQL by CityID
 *     parameters:
 *       - in: path
 *         name: CityID
 *         required: true
 *         description: City ID required
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: City deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

app.post('/city', (req, res) => {
    const { CityID, Name, State, Zipcode } = req.body;
    const query = 'INSERT INTO CITY (CityID, Name, State, Zipcode) VALUES (?, ?, ?, ?)';
    const values = [CityID, Name, State, Zipcode];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'City created successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.put('/city/:CityID', (req, res) => {
    const { CityID } = req.params;
    const { Name, State, Zipcode } = req.body;
    const query = 'UPDATE CITY SET Name = ?, State = ?, Zipcode = ? WHERE CityID = ?';
    const values = [Name, State, Zipcode, CityID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'City updated successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.delete('/city/:CityID', (req, res) => {
    const { CityID } = req.params;
    const query = 'DELETE FROM CITY WHERE CityID = ?';

    mysqlConnection.query(query, [CityID], (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'City deleted successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});


// -------------------------------MOVIES TABLE -------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         MovieID:
 *           type: integer
 *         Title:
 *           type: string
 *         Description:
 *           type: string
 *         Duration:
 *           type: string
 *         Language:
 *           type: string
 *         ReleaseDate:
 *           type: string
 *           format: date-time
 *         Country:
 *           type: string
 *         Genre:
 *           type: string
 *         Movies_CityID:
 *           type: string
 *
 * /movie:
 *   get:
 *     summary: Get all movies from MySQL
 *     description: Retrieve data from MySQL
 *     responses:
 *       '200':
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */

app.get('/movie', (req, res) => {
    mysqlConnection.query('SELECT * FROM MOVIES', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /movie/{MovieID}:
 *   get:
 *     summary: Get movie by MovieID from MySQL
 *     description: Retrieve movie data by MovieID from MySQL
 *     parameters:
 *       - in: path
 *         name: MovieID
 *         required: true
 *         description: Movie ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Movie data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */

app.get('/movie/:MovieID', (req, res) => {
    mysqlConnection.query('SELECT * FROM MOVIES WHERE MovieID = ?', [req.params.MovieID], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /movie:
 *   post:
 *     summary: Create a new movie
 *     description: Create a new movie in MySQL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       '200':
 *         description: Movie created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'

 * /movie/{MovieID}:
 *   put:
 *     summary: Update an existing movie by MovieID
 *     description: Update an existing movie in MySQL by MovieID
 *     parameters:
 *       - in: path
 *         name: MovieID
 *         required: true
 *         description: Movie ID required
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       '200':
 *         description: Movie updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'

 *   delete:
 *     summary: Delete a movie by MovieID
 *     description: Delete a movie from MySQL by MovieID
 *     parameters:
 *       - in: path
 *         name: MovieID
 *         required: true
 *         description: Movie ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Movie deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

app.post('/movie', (req, res) => {
    const { MovieID, Title, Description, Duration, Language, ReleaseDate, Country, Genre, Movies_CityID } = req.body;
    const query = 'INSERT INTO MOVIES (MovieID, Title, Description, Duration, Language, ReleaseDate, Country, Genre, Movies_CityID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [MovieID, Title, Description, Duration, Language, ReleaseDate, Country, Genre, Movies_CityID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Movie created successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.put('/movie/:MovieID', (req, res) => {
    const { MovieID } = req.params;
    const { Title, Description, Duration, Language, ReleaseDate, Country, Genre, Movies_CityID } = req.body;
    const query = 'UPDATE MOVIES SET Title = ?, Description = ?, Duration = ?, Language = ?, ReleaseDate = ?, Country = ?, Genre = ?, Movies_CityID = ? WHERE MovieID = ?';
    const values = [Title, Description, Duration, Language, ReleaseDate, Country, Genre, Movies_CityID, MovieID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Movie updated successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.delete('/movie/:MovieID', (req, res) => {
    const { MovieID } = req.params;
    const query = 'DELETE FROM MOVIES WHERE MovieID = ?';

    mysqlConnection.query(query, [MovieID], (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Movie deleted successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});


// --------------------------------THEATER TABLE----------------------------------------------------------------------------------------------------------------------------------


/**
 * @swagger
 * components:
 *   schemas:
 *     Theater:
 *       type: object
 *       properties:
 *         TheaterID:
 *           type: integer
 *         Name:
 *           type: string
 *         TotalSeats:
 *           type: string
 *         THEATER_CinemaID:
 *           type: integer
 *
 * /theater:
 *   get:
 *     summary: Get all theaters from MySQL
 *     description: Retrieve data from MySQL
 *     responses:
 *       '200':
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Theater'
 */

app.get('/theater', (req, res) => {
    mysqlConnection.query('SELECT * FROM THEATER', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /theater/{TheaterID}:
 *   get:
 *     summary: Get theater by TheaterID from MySQL
 *     description: Retrieve theater data by TheaterID from MySQL
 *     parameters:
 *       - in: path
 *         name: TheaterID
 *         required: true
 *         description: Theater ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Theater data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Theater'
 */

app.get('/theater/:TheaterID', (req, res) => {
    mysqlConnection.query('SELECT * FROM THEATER WHERE TheaterID = ?', [req.params.TheaterID], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /theater:
 *   post:
 *     summary: Create a new theater
 *     description: Create a new theater in MySQL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Theater'
 *     responses:
 *       '200':
 *         description: Theater created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Theater'

 * /theater/{TheaterID}:
 *   put:
 *     summary: Update an existing theater by TheaterID
 *     description: Update an existing theater in MySQL by TheaterID
 *     parameters:
 *       - in: path
 *         name: TheaterID
 *         required: true
 *         description: Theater ID required
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Theater'
 *     responses:
 *       '200':
 *         description: Theater updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Theater'

 *   delete:
 *     summary: Delete a theater by TheaterID
 *     description: Delete a theater from MySQL by TheaterID
 *     parameters:
 *       - in: path
 *         name: TheaterID
 *         required: true
 *         description: Theater ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Theater deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

app.post('/theater', (req, res) => {
    const { TheaterID, Name, TotalSeats, THEATER_CinemaID } = req.body;
    const query = 'INSERT INTO THEATER (TheaterID, Name, TotalSeats, THEATER_CinemaID) VALUES (?, ?, ?, ?)';
    const values = [TheaterID, Name, TotalSeats, THEATER_CinemaID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Theater created successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.put('/theater/:TheaterID', (req, res) => {
    const { TheaterID } = req.params;
    const { Name, TotalSeats, THEATER_CinemaID } = req.body;
    const query = 'UPDATE THEATER SET Name = ?, TotalSeats = ?, THEATER_CinemaID = ? WHERE TheaterID = ?';
    const values = [Name, TotalSeats, THEATER_CinemaID, TheaterID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Theater updated successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.delete('/theater/:TheaterID', (req, res) => {
    const { TheaterID } = req.params;
    const query = 'DELETE FROM THEATER WHERE TheaterID = ?';

    mysqlConnection.query(query, [TheaterID], (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Theater deleted successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});


// -------------------------------SHOWS TABLE ---------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * components:
 *   schemas:
 *     Show:
 *       type: object
 *       properties:
 *         ShowID:
 *           type: integer
 *         Date:
 *           type: string
 *           format: date
 *         StartTime:
 *           type: string
 *           format: time
 *         EndTime:
 *           type: string
 *           format: time
 *         Shows_TheaterID:
 *           type: integer
 *         Shows_MovieID:
 *           type: integer
 *
 * /shows:
 *   get:
 *     summary: Get all shows from MySQL
 *     description: Retrieve data from MySQL
 *     responses:
 *       '200':
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Show'
 */

app.get('/shows', (req, res) => {
    mysqlConnection.query('SELECT * FROM SHOWS', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /shows/{ShowID}:
 *   get:
 *     summary: Get show by ShowID from MySQL
 *     description: Retrieve show data by ShowID from MySQL
 *     parameters:
 *       - in: path
 *         name: ShowID
 *         required: true
 *         description: Show ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Show data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Show'
 */

app.get('/shows/:ShowID', (req, res) => {
    mysqlConnection.query('SELECT * FROM SHOWS WHERE ShowID = ?', [req.params.ShowID], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /shows:
 *   post:
 *     summary: Create a new show
 *     description: Create a new show in MySQL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Show'
 *     responses:
 *       '200':
 *         description: Show created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Show'

 * /shows/{ShowID}:
 *   put:
 *     summary: Update an existing show by ShowID
 *     description: Update an existing show in MySQL by ShowID
 *     parameters:
 *       - in: path
 *         name: ShowID
 *         required: true
 *         description: Show ID required
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Show'
 *     responses:
 *       '200':
 *         description: Show updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Show'

 *   delete:
 *     summary: Delete a show by ShowID
 *     description: Delete a show from MySQL by ShowID
 *     parameters:
 *       - in: path
 *         name: ShowID
 *         required: true
 *         description: Show ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Show deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

app.post('/shows', (req, res) => {
    const { ShowID, Date, StartTime, EndTime, Shows_TheaterID, Shows_MovieID } = req.body;
    const query = 'INSERT INTO SHOWS (ShowID, Date, StartTime, EndTime, Shows_TheaterID, Shows_MovieID) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [ShowID, Date, StartTime, EndTime, Shows_TheaterID, Shows_MovieID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Show created successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.put('/shows/:ShowID', (req, res) => {
    const { ShowID } = req.params;
    const { Date, StartTime, EndTime, Shows_TheaterID, Shows_MovieID } = req.body;
    const query = 'UPDATE SHOWS SET Date = ?, StartTime = ?, EndTime = ?, Shows_TheaterID = ?, Shows_MovieID = ? WHERE ShowID = ?';
    const values = [Date, StartTime, EndTime, Shows_TheaterID, Shows_MovieID, ShowID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Show updated successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.delete('/shows/:ShowID', (req, res) => {
    const { ShowID } = req.params;
    const query = 'DELETE FROM SHOWS WHERE ShowID = ?';

    mysqlConnection.query(query, [ShowID], (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Show deleted successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

// -------------------------------BOOKING TABLE ---------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       properties:
 *         BookingID:
 *           type: integer
 *         NumberofSeats:
 *           type: integer
 *         TimeStamp:
 *           type: string
 *           format: date-time
 *         Status:
 *           type: integer
 *         Booking_UserID:
 *           type: string
 *         Booking_ShowID:
 *           type: integer
 *
 * /booking:
 *   get:
 *     summary: Get all bookings from MySQL
 *     description: Retrieve data from MySQL
 *     responses:
 *       '200':
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 */

app.get('/booking', (req, res) => {
    mysqlConnection.query('SELECT * FROM BOOKING', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /booking/{BookingID}:
 *   get:
 *     summary: Get booking by BookingID from MySQL
 *     description: Retrieve booking data by BookingID from MySQL
 *     parameters:
 *       - in: path
 *         name: BookingID
 *         required: true
 *         description: Booking ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Booking data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 */

app.get('/booking/:BookingID', (req, res) => {
    mysqlConnection.query('SELECT * FROM BOOKING WHERE BookingID = ?', [req.params.BookingID], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /booking:
 *   post:
 *     summary: Create a new booking
 *     description: Create a new booking in MySQL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       '200':
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'

 * /booking/{BookingID}:
 *   put:
 *     summary: Update an existing booking by BookingID
 *     description: Update an existing booking in MySQL by BookingID
 *     parameters:
 *       - in: path
 *         name: BookingID
 *         required: true
 *         description: Booking ID required
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       '200':
 *         description: Booking updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'

 *   delete:
 *     summary: Delete a booking by BookingID
 *     description: Delete a booking from MySQL by BookingID
 *     parameters:
 *       - in: path
 *         name: BookingID
 *         required: true
 *         description: Booking ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Booking deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

app.post('/booking', (req, res) => {
    const { BookingID, NumberofSeats, TimeStamp, Status, Booking_UserID, Booking_ShowID } = req.body;
    const query = 'INSERT INTO BOOKING (BookingID, NumberofSeats, TimeStamp, Status, Booking_UserID, Booking_ShowID) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [BookingID, NumberofSeats, TimeStamp, Status, Booking_UserID, Booking_ShowID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.put('/booking/:BookingID', (req, res) => {
    const { BookingID } = req.params;
    const { NumberofSeats, TimeStamp, Status, Booking_UserID, Booking_ShowID } = req.body;
    const query = 'UPDATE BOOKING SET NumberofSeats = ?, TimeStamp = ?, Status = ?, Booking_UserID = ?, Booking_ShowID = ? WHERE BookingID = ?';
    const values = [NumberofSeats, TimeStamp, Status, Booking_UserID, Booking_ShowID, BookingID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.delete('/booking/:BookingID', (req, res) => {
    const { BookingID } = req.params;
    const query = 'DELETE FROM BOOKING WHERE BookingID = ?';

    mysqlConnection.query(query, [BookingID], (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Booking deleted successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       properties:
 *         PaymentID:
 *           type: integer
 *         AmountNumber:
 *           type: integer
 *         TimeStamp:
 *           type: string
 *           format: date-time
 *         DiscountCoupon:
 *           type: string
 *         RemoteTransactionID:
 *           type: string
 *         PaymentMethod:
 *           type: string
 *         PAYMENT_BookingID:
 *           type: integer
 *
 * /payment:
 *   get:
 *     summary: Get all payments from MySQL
 *     description: Retrieve data from MySQL
 *     responses:
 *       '200':
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Payment'
 */

app.get('/payment', (req, res) => {
    mysqlConnection.query('SELECT * FROM PAYMENT', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /payment/{PaymentID}:
 *   get:
 *     summary: Get payment by PaymentID from MySQL
 *     description: Retrieve payment data by PaymentID from MySQL
 *     parameters:
 *       - in: path
 *         name: PaymentID
 *         required: true
 *         description: Payment ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Payment data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Payment'
 */

app.get('/payment/:PaymentID', (req, res) => {
    mysqlConnection.query('SELECT * FROM PAYMENT WHERE PaymentID = ?', [req.params.PaymentID], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /payment:
 *   post:
 *     summary: Create a new payment
 *     description: Create a new payment in MySQL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     responses:
 *       '200':
 *         description: Payment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'

 *   put:
 *     summary: Update an existing payment by PaymentID
 *     description: Update an existing payment in MySQL by PaymentID
 *     parameters:
 *       - in: path
 *         name: PaymentID
 *         required: true
 *         description: Payment ID required
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     responses:
 *       '200':
 *         description: Payment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'

 *   delete:
 *     summary: Delete a payment by PaymentID
 *     description: Delete a payment from MySQL by PaymentID
 *     parameters:
 *       - in: path
 *         name: PaymentID
 *         required: true
 *         description: Payment ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Payment deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

app.post('/payment', (req, res) => {
    const { PaymentID, AmountNumber, TimeStamp, DiscountCoupon, RemoteTransactionID, PaymentMethod, PAYMENT_BookingID } = req.body;
    const query = 'INSERT INTO PAYMENT (PaymentID, AmountNumber, TimeStamp, DiscountCoupon, RemoteTransactionID, PaymentMethod, PAYMENT_BookingID) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [PaymentID, AmountNumber, TimeStamp, DiscountCoupon, RemoteTransactionID, PaymentMethod, PAYMENT_BookingID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.put('/payment/:PaymentID', (req, res) => {
    const { PaymentID } = req.params;
    const { AmountNumber, TimeStamp, DiscountCoupon, RemoteTransactionID, PaymentMethod, PAYMENT_BookingID } = req.body;
    const query = 'UPDATE PAYMENT SET AmountNumber = ?, TimeStamp = ?, DiscountCoupon = ?, RemoteTransactionID = ?, PaymentMethod = ?, PAYMENT_BookingID = ? WHERE PaymentID = ?';
    const values = [AmountNumber, TimeStamp, DiscountCoupon, RemoteTransactionID, PaymentMethod, PAYMENT_BookingID, PaymentID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.delete('/payment/:PaymentID', (req, res) => {
    const { PaymentID } = req.params;
    const query = 'DELETE FROM PAYMENT WHERE PaymentID = ?';

    mysqlConnection.query(query, [PaymentID], (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Payment deleted successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});


// -------------------------------CINEMA TABLE ---------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * components:
 *   schemas:
 *     Cinema:
 *       type: object
 *       properties:
 *         CinemaID:
 *           type: string
 *         Name:
 *           type: string
 *         TotalCinemaHalls:
 *           type: string
 *         CINEMA_CityID:
 *           type: string
 *
 * /cinema:
 *   get:
 *     summary: Get all cinemas from MySQL
 *     description: Retrieve data from MySQL
 *     responses:
 *       '200':
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cinema'
 */

app.get('/cinema', (req, res) => {
    mysqlConnection.query('SELECT * FROM CINEMA', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /cinema/{CinemaID}:
 *   get:
 *     summary: Get cinema by CinemaID from MySQL
 *     description: Retrieve cinema data by CinemaID from MySQL
 *     parameters:
 *       - in: path
 *         name: CinemaID
 *         required: true
 *         description: Cinema ID required
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cinema data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cinema'
 */

app.get('/cinema/:CinemaID', (req, res) => {
    mysqlConnection.query('SELECT * FROM CINEMA WHERE CinemaID = ?', [req.params.CinemaID], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /cinema:
 *   post:
 *     summary: Create a new cinema
 *     description: Create a new cinema in MySQL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cinema'
 *     responses:
 *       '200':
 *         description: Cinema created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cinema'

 *   put:
 *     summary: Update an existing cinema by CinemaID
 *     description: Update an existing cinema in MySQL by CinemaID
 *     parameters:
 *       - in: path
 *         name: CinemaID
 *         required: true
 *         description: Cinema ID required
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cinema'
 *     responses:
 *       '200':
 *         description: Cinema updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cinema'

 *   delete:
 *     summary: Delete a cinema by CinemaID
 *     description: Delete a cinema from MySQL by CinemaID
 *     parameters:
 *       - in: path
 *         name: CinemaID
 *         required: true
 *         description: Cinema ID required
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cinema deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

app.post('/cinema', (req, res) => {
    const { CinemaID, Name, TotalCinemaHalls, CINEMA_CityID } = req.body;
    const query = 'INSERT INTO CINEMA (CinemaID, Name, TotalCinemaHalls, CINEMA_CityID) VALUES (?, ?, ?, ?)';
    const values = [CinemaID, Name, TotalCinemaHalls, CINEMA_CityID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.put('/cinema/:CinemaID', (req, res) => {
    const { CinemaID } = req.params;
    const { Name, TotalCinemaHalls, CINEMA_CityID } = req.body;
    const query = 'UPDATE CINEMA SET Name = ?, TotalCinemaHalls = ?, CINEMA_CityID = ? WHERE CinemaID = ?';
    const values = [Name, TotalCinemaHalls, CINEMA_CityID, CinemaID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.delete('/cinema/:CinemaID', (req, res) => {
    const { CinemaID } = req.params;
    const query = 'DELETE FROM CINEMA WHERE CinemaID = ?';

    mysqlConnection.query(query, [CinemaID], (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Cinema deleted successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});


// -------------------------------CINEMA_SEAT TABLE ---------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * components:
 *   schemas:
 *     CinemaSeat:
 *       type: object
 *       properties:
 *         CinemaSeatID:
 *           type: string
 *         SeatNumber:
 *           type: integer
 *         Type:
 *           type: string
 *         CINEMA_SEAT_TheaterID:
 *           type: integer
 *
 * /cinema_seat:
 *   get:
 *     summary: Get all cinema seats from MySQL
 *     description: Retrieve data from MySQL
 *     responses:
 *       '200':
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CinemaSeat'
 */

app.get('/cinema_seat', (req, res) => {
    mysqlConnection.query('SELECT * FROM CINEMA_SEAT', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /cinema_seat/{CinemaSeatID}:
 *   get:
 *     summary: Get cinema seat by CinemaSeatID from MySQL
 *     description: Retrieve cinema seat data by CinemaSeatID from MySQL
 *     parameters:
 *       - in: path
 *         name: CinemaSeatID
 *         required: true
 *         description: Cinema Seat ID required
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cinema seat data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CinemaSeat'
 */

app.get('/cinema_seat/:CinemaSeatID', (req, res) => {
    mysqlConnection.query('SELECT * FROM CINEMA_SEAT WHERE CinemaSeatID = ?', [req.params.CinemaSeatID], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /cinema_seat:
 *   post:
 *     summary: Create a new cinema seat
 *     description: Create a new cinema seat in MySQL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CinemaSeat'
 *     responses:
 *       '200':
 *         description: Cinema seat created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CinemaSeat'

 *   put:
 *     summary: Update an existing cinema seat by CinemaSeatID
 *     description: Update an existing cinema seat in MySQL by CinemaSeatID
 *     parameters:
 *       - in: path
 *         name: CinemaSeatID
 *         required: true
 *         description: Cinema Seat ID required
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CinemaSeat'
 *     responses:
 *       '200':
 *         description: Cinema seat updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CinemaSeat'

 *   delete:
 *     summary: Delete a cinema seat by CinemaSeatID
 *     description: Delete a cinema seat from MySQL by CinemaSeatID
 *     parameters:
 *       - in: path
 *         name: CinemaSeatID
 *         required: true
 *         description: Cinema Seat ID required
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cinema seat deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

app.post('/cinema_seat', (req, res) => {
    const { CinemaSeatID, SeatNumber, Type, CINEMA_SEAT_TheaterID } = req.body;
    const query = 'INSERT INTO CINEMA_SEAT (CinemaSeatID, SeatNumber, Type, CINEMA_SEAT_TheaterID) VALUES (?, ?, ?, ?)';
    const values = [CinemaSeatID, SeatNumber, Type, CINEMA_SEAT_TheaterID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.put('/cinema_seat/:CinemaSeatID', (req, res) => {
    const { CinemaSeatID } = req.params;
    const { SeatNumber, Type, CINEMA_SEAT_TheaterID } = req.body;
    const query = 'UPDATE CINEMA_SEAT SET SeatNumber = ?, Type = ?, CINEMA_SEAT_TheaterID = ? WHERE CinemaSeatID = ?';
    const values = [SeatNumber, Type, CINEMA_SEAT_TheaterID, CinemaSeatID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.delete('/cinema_seat/:CinemaSeatID', (req, res) => {
    const { CinemaSeatID } = req.params;
    const query = 'DELETE FROM CINEMA_SEAT WHERE CinemaSeatID = ?';

    mysqlConnection.query(query, [CinemaSeatID], (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Cinema seat deleted successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});


// -------------------------------SHOW_SEAT TABLE ---------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * components:
 *   schemas:
 *     ShowSeat:
 *       type: object
 *       properties:
 *         ShowSeatID:
 *           type: integer
 *         Status:
 *           type: string
 *         Price:
 *           type: integer
 *         SHOW_SEAT_CinemaSeatID:
 *           type: string
 *         SHOW_SEAT_ShowID:
 *           type: integer
 *         SHOW_SEAT_BookingID:
 *           type: integer
 *
 * /show_seat:
 *   get:
 *     summary: Get all show seats from MySQL
 *     description: Retrieve data from MySQL
 *     responses:
 *       '200':
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ShowSeat'
 */

app.get('/show_seat', (req, res) => {
    mysqlConnection.query('SELECT * FROM SHOW_SEAT', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /show_seat/{ShowSeatID}:
 *   get:
 *     summary: Get show seat by ShowSeatID from MySQL
 *     description: Retrieve show seat data by ShowSeatID from MySQL
 *     parameters:
 *       - in: path
 *         name: ShowSeatID
 *         required: true
 *         description: Show Seat ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Show seat data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ShowSeat'
 */

app.get('/show_seat/:ShowSeatID', (req, res) => {
    mysqlConnection.query('SELECT * FROM SHOW_SEAT WHERE ShowSeatID = ?', [req.params.ShowSeatID], (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

/**
 * @swagger
 * /show_seat:
 *   post:
 *     summary: Create a new show seat
 *     description: Create a new show seat in MySQL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ShowSeat'
 *     responses:
 *       '200':
 *         description: Show seat created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ShowSeat'

 *   put:
 *     summary: Update an existing show seat by ShowSeatID
 *     description: Update an existing show seat in MySQL by ShowSeatID
 *     parameters:
 *       - in: path
 *         name: ShowSeatID
 *         required: true
 *         description: Show Seat ID required
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ShowSeat'
 *     responses:
 *       '200':
 *         description: Show seat updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ShowSeat'

 *   delete:
 *     summary: Delete a show seat by ShowSeatID
 *     description: Delete a show seat from MySQL by ShowSeatID
 *     parameters:
 *       - in: path
 *         name: ShowSeatID
 *         required: true
 *         description: Show Seat ID required
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Show seat deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

app.post('/show_seat', (req, res) => {
    const { ShowSeatID, Status, Price, SHOW_SEAT_CinemaSeatID, SHOW_SEAT_ShowID, SHOW_SEAT_BookingID } = req.body;
    const query = 'INSERT INTO SHOW_SEAT (ShowSeatID, Status, Price, SHOW_SEAT_CinemaSeatID, SHOW_SEAT_ShowID, SHOW_SEAT_BookingID) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [ShowSeatID, Status, Price, SHOW_SEAT_CinemaSeatID, SHOW_SEAT_ShowID, SHOW_SEAT_BookingID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.put('/show_seat/:ShowSeatID', (req, res) => {
    const { ShowSeatID } = req.params;
    const { Status, Price, SHOW_SEAT_CinemaSeatID, SHOW_SEAT_ShowID, SHOW_SEAT_BookingID } = req.body;
    const query = 'UPDATE SHOW_SEAT SET Status = ?, Price = ?, SHOW_SEAT_CinemaSeatID = ?, SHOW_SEAT_ShowID = ?, SHOW_SEAT_BookingID = ? WHERE ShowSeatID = ?';
    const values = [Status, Price, SHOW_SEAT_CinemaSeatID, SHOW_SEAT_ShowID, SHOW_SEAT_BookingID, ShowSeatID];

    mysqlConnection.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

app.delete('/show_seat/:ShowSeatID', (req, res) => {
    const { ShowSeatID } = req.params;
    const query = 'DELETE FROM SHOW_SEAT WHERE ShowSeatID = ?';

    mysqlConnection.query(query, [ShowSeatID], (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Show seat deleted successfully' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------