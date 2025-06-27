require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
console.log(PORT)

app.get('/', (req, res) => {
    res.send(`
    <h1>Curso Express.js v2.2</h1>
    <p>Esto es una aplicacion de nodejs con expressjs</p>
    <p>Corre en el puerto: ${PORT}</p>      
        `) 
})

app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`)
}); 