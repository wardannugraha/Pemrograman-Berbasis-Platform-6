const express = require('express');
const app = express();
const port = 8000;

const motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentina',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

app.get('/', (req, res) => {
    res.json({ message: "All MotoGP Data", data: motoGP });
});

app.get('/country', (req, res) => {
    const groupedByCountry = motoGP.reduce((acc, item) => {
        const country = item.winner.country;
        if (!acc[country]) acc[country] = [];
        acc[country].push(item);
        return acc;
    }, {});
    res.json({ message: "Grouped by Country", data: groupedByCountry });
});

app.get('/name', (req, res) => {
    const groupedByName = motoGP.reduce((acc, item) => {
        const name = `${item.winner.firstName} ${item.winner.lastName}`;
        if (!acc[name]) acc[name] = [];
        acc[name].push(item);
        return acc;
    }, {});
    res.json({ message: "Grouped by Winner's Name", data: groupedByName });
});

app.use((req, res) => {
    res.status(400).json({ error: "Bad Request" });
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
