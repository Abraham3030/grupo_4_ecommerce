const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, './public');
const PORT = 3000;

app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home/index.html'));
});



