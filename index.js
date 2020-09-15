const express = require('express')
const app = express()
	
app.get('/', function(req, res){
    res.send('Hola, Concejo de Medellín!!!!')
})

app.get('/oscar', (req, res) => {
    res.send(`<h1>Hola Oscar!!!!</h1>
              <h2>Saludos de express!!!</h2>`)
})

app.get('/json', (req, res) => {
    res.json({nombre:"Oscar",edad:29})
})

app.get('/estudiantes/:numero_estudiantes', (req, res) => {
    console.log("El parametro numero_estudiantes es ", req.params.numero_estudiantes)
    res.json({numero_estudiantes:req.params.numero_estudiantes})
})

app.get("/fibonacci/:num", (req, res) => {
    
})

app.listen(5057, function(){
    console.log("Corriendo")
})
