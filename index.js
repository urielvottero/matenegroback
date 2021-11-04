const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const productos = [{
    img: 'ImgP1.jpg',
    name: 'Tabaquera marron oscuro',
    ribbon: false,
    price: 500
},{
    img: 'fotoProducto1 (1).jpg',
    name: 'Tabaquera negra',
    ribbon: false,
    price: 500
},{
    img: 'fotoProducto2 (1).jpg',
    name: 'Tabaquera gris',
    ribbon: true,
    price: 500
},{
    img: 'fotoProducto3 (1).jpg',
    name: 'Tabaquera beige',
    ribbon: false,
    price: 500
},{
    img: 'miniF2.jpg',
    name: 'Mini Marron',
    ribbon: false,
    price: 300
},{
    img: 'miniF4.jpg',
    name: 'Mini Negra',
    ribbon: false,
    price: 300
},{
    img: 'miniF1.jpg',
    name: 'Mini Gris',
    ribbon: false,
    price: 300
},{
    img: 'conBolsilloMa.jpg',
    name: 'Con bolsillo marron',
    ribbon: false,
    price: 600
},{
    img: 'conBolsilloNe.jpg',
    name: 'Con bolsillo negro',
    ribbon: true,
    price: 600
},{
    img: 'conBolsillogris.jpg',
    name: 'Con bolsillo gris',
    ribbon: true,
    price: 600
},{
    img: 'negra1.jpg',
    name: 'Negra de cuero texturado',
    ribbon: false,
    price: 700
},{
    img: 'negra2.jpg',
    name: 'Negra de cuero',
    ribbon: false,
    price: 700
}]

//permite el acceso desde una url o puerto distinto
app.use(cors())

//transforma lo que recibe en un json legible por js
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


//responde al frontend contenido
app.get('/', (req, res) => {
    res.send('Mate Negro Backend')
})

//recibe del frontend un objeto y responde 200 (OK)
app.post('/pedidos', (req, res) => {
    console.log(req.body)
    res.status(200).send('OK')
})

// responde al frontend la lista de productos
app.get('/productos', (req, res) => {
    res.status(200).json(productos)
})


//el server
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})