const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

// const db = knex({
//   // Enter your own database information here based on what you created
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : 'aneagoie',
//     password : '',
//     database : 'smart-brain'
//   }
// });

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> {
    res.send("Hellooooooo");
  })

app.listen(3000, ()=> {
    console.log('app is running on port 3000');
  })