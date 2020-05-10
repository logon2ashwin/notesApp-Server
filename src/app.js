const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/** Routes */
const authRoutes = require('./routes/auth');




const MONGODB_URI = 'mongodb+srv://notesAdmin:kdPUTtfkY4VWqRlv@cluster0-jzxcu.mongodb.net/notesApp?retryWrites=true&w=majority';


const app = express();

/**Middleware */
app.use(bodyParser.json()); // application/json
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected'); //Do not remove this console
    app.listen(3030);
  })
  .catch(err => console.log(err));
