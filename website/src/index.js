import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

/*
const express = require('express');
const path = require('path');
const app = express();
const port = 9000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
*/

ReactDOM.render(<App />, document.getElementById('root'));
