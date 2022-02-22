const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    const data = axios.get('http://ws-old.parlament.ch/sessions?format=json').then(responce => {
        res.send(responce.data);
    })
})

app.get('/affairs/', (req, res) => {
    const data = axios.get('http://ws-old.parlament.ch/affairs?format=json').then(responce => {
        res.send(responce.data);
    })
})

app.listen(8000, () => {
    console.log('app listening on port 8080...');
})