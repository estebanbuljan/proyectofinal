//constantes
const express = require('express');
const path = require('path');
const hbs = require('hbs');

//puerto y express
const PORT = process.env.port || 3000 ;
const app = express();

//Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));


//configuracioness
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));


//rutas
app.get('/', (req, res) =>{
    res.render('home')
});

app.get('/zapatillas', (req, res) =>{
    res.render('zapatillas')
});

app.get('/contactanos', (req, res) =>{
    res.render('contactanos')
});

app.listen(PORT, () => {
    //console.log(`Aplicacion activa y trabajando en el puerto ${PORT}`);
});


app.on('Error', (err) => {
   // console.log('tenemos un error en el espacio');
});
