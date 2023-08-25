const express = require('express');
const path = require('path');

const app = express ();

app.use(express.static(path.join(__dirname, '../public')));

const PORT = 3008;
app.listen(PORT, () => {
    console.log(`Se prendió en el puerto ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productCart.html'));
});
