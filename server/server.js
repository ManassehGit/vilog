const express = require('express');
const path = require('path');
const {Pool} = require('pg');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const uri = "postgres://eatpxpnqscoxqx:0765d0686bedc1718fc1298cb6162a48fee9e458fe1a89598d4f8a2062f8ff33@ec2-54-165-90-230.compute-1.amazonaws.com:5432/ddbhdm3cc7l5kg";
const app = express();


const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



let port = process.env.PORT || 3001;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "ViLog APIs",
            description: 'ViLog endpoints for interactions with the database and working with the visitors and users tables',
            contact: {
                name: 'Manasseh'
            },
            servers: ["http://localhost:3001"]
        }
    },
    apis: ["server.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.static(path.resolve(__dirname, '..', 'build')));


const pool = new Pool({
 connectionString: uri,
 ssl: {
 rejectUnauthorized: false
 }
});

/**
 * @swagger
 * /testing:
 *  get: 
 *      description: Use to request the list of hosts and admins
 *      responses: 
 *          '200': A successful response
 */
 app.get("/testing", (req, res) => {
     console.log("hello there")
    res.status(200).send("GHello there");
})

// Routes
/**
 * @swagger
 * /users:
 *  get: 
 *      description: Use to request the list of hosts and admins
 *      responses: 
 *          200: A successful response
 */
app.get('/users', async (req, res, next) => {
    // res.status(201).json({msg: "Welcome to the serve page"});
    const result = await pool.query(`SELECT * FROM Users;`, (err, res) => {
        if (err) {
            console.log(err);
        }
        else{
            return res.rows;
        }
    })
    res.status(200).send(result)

})

app.get('/visitors', async (req, res, next) => {
    const result = await pool.query(`SELECT * FROM Visitors;`, (err, res) => {
        if (err) {
            console.log("Error - Failed to select all from Users");
            console.log(err);
        }
        else{
            // console.log(res.rows);
            return res.rows
        }
    })
    console.log(result)

})

app.post('/addUser', async (req, res, next) => {
    try{
        console.log(req.body)
        const {firstname, password, department} = req.body;
        const result = await pool.query(`INSERT INTO Users(username, user_password, department) VALUES('${firstname}', '${password}', '${department}') RETURNING *;`)
        
        return res.json(result);
    
    }catch(err){
        console.log("Sorry error",err.message);
    }
})

app.post('/addVisitor', async (req, res, next) => {
    try{
        console.log("Req bosy",req.body)
        const {username, dateCurrent, timeIn, timeOut, loginMethod} = req.body;
        
        const result = await pool.query(`INSERT INTO Visitors(username, date_current, time_in, time_out, login_method) VALUES('${username}', '${dateCurrent}', '${timeIn}', '${timeOut}', '${loginMethod}') RETURNING *;`)
        return res.json(result);
    
    }catch(err){
        console.log("Sorry error",err.message);
    }
})

app.delete('/deleteUser/:id', async (req, res, next) => {
    console.log(req.params);
    try{
        const {id} = req.params;
        
        const result = await pool.query(`DELETE FROM Users WHERE id='${id}' RETURNING *;`)
        console.log(result.rows)
        return res.json(result.rows);
    
    }catch(err){
        console.log("Sorry error",err.message);
    }
})

app.put('/editUser/:id', (req, res, next) => {
    console.log(JSON.stringify(req.body))
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})