const express = require('express');

const app = express();

const contactlist = [
    {
        FamilyName: 'Boudagga',
        FirstName: 'Mohamed-Amine',
        Age: 26,
        Phone: '53 940 203'
    },
    {
        FamilyName: 'Ben Hassine',
        FirstName: 'Farah',
        Age: 15,
        Phone: '43 325 150'
    },
    {
        FamilyName: 'Jerbi',
        FirstName: 'Selim',
        Age: 83,
        Phone: '45 201 000'
    },
];

app.get('/hello', (req, res) => {
    res.send('<h1> Hello Guys! H </h1>')
})

app.get('/home', (req, res) => {
    res.sendFile('/home.html', {root: __dirname})
})

app.get('/services', (req, res) => {
    res.sendFile('/services.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    res.sendFile('/contact.html', {root: __dirname})
})

app.listen(5000, (err) => {
    if (err) throw (err)
    else console.log('Server running on port 5000');
});