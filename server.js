// Parametros necesarios de express
const express = require("express");
// Parametros de  express handlebars
const exphbs = require('express-handlebars');
//Librearia para leer json 
const fs = require('fs-extra');
const path = require('path');
const app = express();
//Definir el port del server
const PORT = 3000;
// Definir la ruta del json para utilizarla con Filesystem
const jsonPath =  './assets/json/verduras.json';


// Definir la carpeta de archivos estáticos
app.use("/assets", express.static(path.join(__dirname, "assets")));

//Integrar Bootstrap
app.use(
    "/bootstrap",
    express.static(__dirname + "/node_modules/bootstrap/dist/css")
);
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

  // Integrar jQuery
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

  // Integrar fontawesome 
app.use('/fontawesome', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free')));

// middleware para obtener el json 
async function obtenerVerduras (req, res, next) {
  try {
    const verduras =  await fs.readJson(jsonPath);
    req.verduras = verduras;
    console.log(req.verduras);
    next();
  } catch (err) {
    next(err);
  }
} 

//implementando las extensiones y directorios de handlebars
app.set("view engine", "hbs");

app.engine(
    "hbs",
    exphbs.engine({
    // .hbs extencion del archivo
    extname: 'hbs',
    defaultLayout: 'inicio',
    layoutsDir: path.join(__dirname, 'views/'),
    partialsDir:[ path.join(__dirname, 'views/componentes'),]
  }));
//Entregando datos para renderizar en 
app.get('/', obtenerVerduras, function (req, res)  {
    res.render('Inicio',{
        layout: "Inicio",
        verduras: [
          { name: 'Banana', imagen: 'banana.png' },
          { name: 'Cebollas', imagen: 'cebollas.png' },
          { name: 'Lechuga', imagen: 'lechuga.png' },
          { name: 'Papas', imagen: 'papas.png' },
          { name: 'Pimenton', imagen: 'pimenton.png' },
          { name: 'Tomate', imagen: 'tomate.png' }
        ]
    });
});
//Inicializacion del server
app.listen(PORT, () => {
    console.log("El servidor está inicializado en el puerto 3000");
  });  