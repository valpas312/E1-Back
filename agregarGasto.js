import fs from 'fs';

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
        err ? reject(err) : resolve(JSON.parse(data));
        });
    });
};

const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, (
            // se usa map para eliminar la propiedad accion
            data.length > 0 ? JSON.stringify(data.map(({accion, ...rest}) => rest)) : null
        ) , (err) => {
        err ? reject(err) : resolve(console.log("Gasto guardado"));
        });
    });
};

export { getFile, writeFile };