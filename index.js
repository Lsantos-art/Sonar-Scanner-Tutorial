const express = require('express')
const app = express()
const port = 3000

let response = 'Este é um teste de code smells do sonar';
let response2 = 'Este é um teste de code smells do sonar';
let data = 'Este é um teste de code smells do sonar';
let data2 = 'Este é um teste de code smells do sonar';

if (true == true) {
    console.log(true);
}

if (true == false) {
    console.log(true);
}

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))