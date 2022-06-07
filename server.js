const sendVisitorQR = require('./mailing/sendMail');
const express = require('express');
const path = require('path');
const {Pool} = require('pg');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

swaggerDocument = require('./swagger.json');


const uri = "postgres://eatpxpnqscoxqx:0765d0686bedc1718fc1298cb6162a48fee9e458fe1a89598d4f8a2062f8ff33@ec2-54-165-90-230.compute-1.amazonaws.com:5432/ddbhdm3cc7l5kg";
const app = express();


const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



let port = process.env.PORT || 8000;

// const swaggerOptions = {
//     swaggerDefinition: {
//         info: {
//             title: "ViLog APIs",
//             description: 'ViLog endpoints for interactions with the database and working with the visitors and users tables',
//             contact: {
//                 name: 'Manasseh'
//             },
//             servers: ["http://localhost:3001"]
//         }
//     },
//     apis: ["server.js"]
// }

// const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//Was used to serve the static build of the react app
// app.use(express.static(path.resolve(__dirname, '..', 'build')));


const pool = new Pool({
 connectionString: uri,
 ssl: {
 rejectUnauthorized: false
 }
});


app.get("/sendMail/:usermail", async (req, res) => {
    const {usermail} = req.params;
    let result = await sendVisitorQR.sendQRMail(`${usermail}`)
    res.status(201).send(result);
    console.log("result", result)
})


// Routes
app.get('/users', async (req, res, next) => {
    // res.status(201).json({msg: "Welcome to the serve page"});
    try{
        const result = await pool.query(`SELECT * FROM Users;`);
        res.status(200).send(result);
    }catch(err){
        console.log(err)
    }
   
    

})

app.get('/visitors', async (req, res, next) => {
    try{
        const result = await pool.query(`SELECT * FROM Visitors;`);
        res.status(200).send(result);
    }catch(err){
        console.log(err);
    }
   

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

app.delete('/users/:id', async (req, res, next) => {
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

app.put('/users/:id', (req, res, next) => {
    console.log(JSON.stringify(req.body))
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})