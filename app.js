require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;
console.log(PORT)

app.get('/', (req, res) => {
    res.send(`
    <h1>Curso Express.js v2.2</h1>
    <p>Esto es una aplicacion de nodejs con expressjs</p>
    <p>Corre en el puerto: ${PORT}</p>      
        `) 
})

app.get('/users/:id', (req,res) => {
    const userId = req.params.id;
    res.send(`Mostrar información del usuario con ID: ${userId}`)
})

app.get('/search', (req,res) => {
    const terms = req.query.termino || 'No especificado';
    const category = req.query.categoria || 'Todas';

    //la ruta debe ser /search?termino=express&categoria=node, para extraer los parametros
    res.send(`
        <h2>Resultados de la busqueda:</h2>
        <p>Termino: ${terms}</p>
        <p>Categoria: ${category}</p>    
        `)
})

app.post('/form', (req,res) => {
    const name = req.body.nombre || 'Anonimo';
    const email = req.body.email || 'No proporcionado'
    res.json({
        message: 'Datos recibido',
        data: {
            name,
            email
        }
    })
})

app.post('/api/data', (req,res) => {
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({error: 'No se recibieron datos'})
    }

    res.status(201).json({
        message: 'Datos JSON recibidos',
        data
    })
})

app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`)
}); 