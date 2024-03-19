const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
app.use(express.json()); //json data is friendly with JS
dotenv.config();
const options = {
  origin: 'http://localhost:3000',
  useSuccessStatus: 200, //because some old servers need it
};
const { readdirSync } = require('fs');
app.use(cors(options)); //every access to this server from anywhere

//routers
readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)));

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.log('error in mongodb: ' + err));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Server is listening');
});
