const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'niha.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server chal raha hai!");
});
