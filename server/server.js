const express = require('express');
const path = require('path');


const app = express();
let port = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/users', (req, res, next) => {
    res.status(201).json({msg: "Welcome to the serve page"})
})

app.post('/addUser', (req, res, next) => {
    
})

app.delete('/deleteUser', (req, res, next) => {
    
})

app.put('/editUser', (req, res, next) => {
    
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})