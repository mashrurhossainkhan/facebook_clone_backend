const express = require('express');
const cors = require('cors');
const app = express();
const options = {
  origin: 'http://localhost:3000',
  useSuccessStatus: 200, //because some old servers need it
};
const { readdirSync } = require('fs');
app.use(cors(options)); //every access to this server from anywhere
/*
const userRouter = require('./routes/users');
app.use('/user', userRouter);
Instead of these two lines, we can user:
*/
readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)));
/*
app.get('/', (req, res) => {
  res.send('home');
});

app.get('/books', (req, res) => {
  res.send('books');
});
*/
app.listen(8000, () => {
  console.log('Server is listening');
});
