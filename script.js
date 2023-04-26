let fs = require('fs');

const path = "./css";

const newHTML = () => {
    let mainRAZ = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body></body></html>'
    fs.open('index.html', 'w', (err) => {
        if (err) throw err;
        console.log('Html file be created!');
    })
    fs.appendFile('index.html', mainRAZ, (err) => {
        if (err) throw err;
        console.log('Data has been added!');
    })
}

const newCSS = () => {
    fs.mkdir(path, (error) => {
        if (error) throw error;
        console.log("New Directory created successfully !!");
    });
    let mainCSS = '*{margin: 0;padding: 0;}'
    fs.open('css/style.css', 'w', (err) => {
        if (err) throw err;
        console.log('Css file be created!');
    })
    fs.appendFile('css/style.css', mainCSS, (err) => {
        if (err) throw err;
        console.log('Data has been added!');
    })
}

const fileDelete = () => {
    fs.unlink('style.css', (err) => {
        if (err) throw err;
    })
    fs.unlink('index.html', (err) => {
        if (err) throw err;
    })
    console.log('File deleted successfully!');
}

// newHTML()
// newCSS()
// fileDelete()