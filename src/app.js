const express = require('express');
const path    = require('path');

const app = express();
const publicPath = path.resolve(__dirname, './public');


app.use( express.static( publicPath ));

app.listen( 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home/index.html'));
});

app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login/login.html'));
});

app.get('/cart', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/cart/cart.html'));
});

app.get('/detail', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/detail/detalle-producto.html'));
})