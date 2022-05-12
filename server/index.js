const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())

app.get('/hello', (req, res) => {
    res.send('Hello my friend')
});

app.post('/api/signup', (req, res) => {
    console.log(req.body)
    res.json({ status: 'OK'})
});

app.listen(9000, () => {
    console.log("Server started on 9000")
});