const express = require('express');
const path = require('path');
const app = express();

const files_path = path.join(__dirname, 'files');

app.get('', (req, res)=>{
    res.send(`Welcome to the homepage, ${req.query.name}`);
});

    app.use(express.static(files_path));
app.listen(4500);