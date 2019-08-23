const fs = require('fs') //Nativo de node
var colors = require('colors')
let listar = (base, limite) => {

    console.log('==============='.red);
    console.log(`tabla del ${base}`.red);
    console.log('==============='.red);
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index}\n`);
    }
}


crearArchivo = async(base, limite = 10) => {
        if (!Number(base)) {
            throw new Error(`No es un numero cachon. Lo que pusiste fue, ${base}`)
        }
        console.log("siguio");
        let result;
        let data = '';
        for (let index = 1; index <= limite; index++) {
            result = base * index
            data += `${base} * ${index} = ${result}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) throw new Error(`Error ${err}`);
        })
        return `tabla-${base}`;
    }
    /*
    crearArchivo = (base) => {
        return new Promise((resolve, reject) => {
            let result;
            let data = '';
            for (let index = 1; index <= 10; index++) {
                result = base * index
                data += `${base} * ${index} = ${result}\n`;
            }

            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(`tabla-${base}`);
                }
            })


        })

    }*/


module.exports = {
    //crearArchivo = crearArchivo pero se puede hacer asi
    // |
    // V
    //TAMBIEN   
    crearArchivo,
    listar
}