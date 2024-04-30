const express = require("express");
var createError = require('http-errors');
require('dotenv').config()
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 5000;

var usersRouter = require('./routes/user');
var inventoryRouter = require('./routes/inventory');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/users', usersRouter);
app.use('/api/inventory', inventoryRouter);


app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

