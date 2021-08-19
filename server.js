const app = require('./app.js')

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

app.listen(PORT,()=>{console.log( "listen on port",PORT)});
