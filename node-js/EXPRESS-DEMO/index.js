const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());

const array = [1, 2, 54, 32]

app.get('/api/array', (req, res) => {
    res.send(array);
});

const port = process.env.PORT  || 3000;
app.listen(port , () => console.log(`Listening on port ${port}...`))
