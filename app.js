const createError = require('http-errors');
const session = require('express-session');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const applicationRouter = require('./modules/applications/controllers');
const loginRouter= require("./modules/Managers/controllers")
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const db = require('./database/index')
const router = require('./routes/index')

app.use(router)

db.authenticate()
  .then(() => console.log( 'Database connected...'))
  .catch(err => console.log('Error' +(err)))

app.get('/', (req, res) => res.send('index'))


/*const { allowedNodeEnvironmentFlags } = require('process');
const whitelist = ['http://localhost:3000', 'localhost:9000/application']*/

app.use(cors());


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(morgan('dev'));

app.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
 
  res.setHeader(
 
    "Access-Control-Allow-Headers",
 
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
 
  );
 
  res.setHeader(
 
    "Access-Control-Allow-Methods",
 
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
 
  );
 
  next();
 
 });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/application', applicationRouter);
app.use("/login", loginRouter);
app.use('/gedata', require('./routes/index'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Fetching the users


module.exports = app;
