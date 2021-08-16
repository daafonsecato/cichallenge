const express = require('express');

// App
const app = express();
app.post('/users', (req, res) => {
    res.sendStatus(200);
});

export default app
