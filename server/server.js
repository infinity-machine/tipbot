const express = require('express');
const PORT = process.env.PORT || 3333;
const path = require('path');

const app = express();

require('./routes/htmlroute')(app);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));


app.listen(PORT, () => {
    console.log('SERVER SERVING ON PORT %s', PORT);
})