const router = require('express').Router();
const parseKMZ = require("parse2-kmz");
const fs = require('fs');
const path = require('path');

router.get('/', async (req, res) => {
    try {
        //const fileDirectory = path.join(__dirname, 'db');
        const dir = './src/db'
        const filesName = fs.readdirSync(dir);

        const dato = await getAll(filesName);
        res.status(200).json(dato);
    } catch (error) {
        console.log(error);
    }
});


const getAll = (names) => {
return new Promise((resolve, reject) => {
    let arr = [];
    names.forEach(name => {
        arr.push(parseKMZ.toJson(`src/db/${name}`)
        .then(dato => dato)
        .catch(err => reject(err)))
    });
    console.log('arr-->', arr);
    Promise.all(arr)
        .then(data => resolve(data))
        .catch(err => reject(err)) 
})
}



module.exports = router;