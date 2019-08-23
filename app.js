//Requireds
//const fs = require('fs') //Nativo de node
//const fs = require('express')//externos, hechos por otras personas. Toca intalar
//const fs = require('./path')//Hechos por nosotros
const { crearArchivo, listar } = require('./multiplicar/multiplicar.js')
const argv = require('./config/yargs').argv
var colors = require('colors')
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(data => {
                console.log(data + " creada");
            })
            .catch(err => {
                console.log(`${err}!`);
            })
        break;

    default:
        console.log('Comando no reconocido');


}
//let argv2 = process.argv;
//let parametro = argv[2] //Es 2 porque es el 2 argumento comenzando desde 0 del comando process que es el que se ejecuta cuando corremos la app 
//let base = parametro.split('=')[1];

//npm install color --save. Le da color a la terminal.