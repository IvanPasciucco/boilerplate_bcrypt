'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt      = require('bcrypt');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash); // Muestra el hash generado en consola
  
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res); // Debería mostrar 'true'
  });
});


//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
