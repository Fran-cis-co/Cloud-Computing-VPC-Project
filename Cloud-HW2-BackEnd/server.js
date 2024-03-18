const express = require('express');

const app = express();
const port = 8080;


const mongo = require('./db');


const tasks = require('./hw2-routes/tasks.js');
app.use('/tasks', tasks);

app.listen(port, async () => {
    console.log(`Server is listening on port ${port}`);
    await mongo.connect();
});