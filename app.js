/* Express declared. */
const express = require('express');
/* Path is used for path.join. It tells where specific paths are for the app to use. */
const path = require('path');
/* A favicon is a visual cue that client software, like browsers, use to identify a site */
const favicon = require('serve-favicon');
/* Logger for dev purpose */
const logger = require('morgan');
/* Work with cookies, this is to translate to and from cookie */
const cookieParser = require('cookie-parser');
/* For body msg. req.body.something... */
const bodyParser = require('body-parser');
/* Load the modern build */
const _ = require('lodash');
/* Load Json Web Token */
const jwt = require('jsonwebtoken');
/* Load express jwt, for authenticat checks of scopes and api calls */
const jwtCheck = require('express-jwt');
/* Loading secret configuration */
const config = require('./config/configuration');

/* Defining app as express server */
const app = express();
/* Configuring App sets and it's use */

/*
 
* https://github.com/expressjs/cors check out cors for node.... at some point. 

*/

/* View engine setup */
  /* Make engine html use ejs render. */
  
app.engine('html', require('ejs').renderFile);

  /* set path to views */

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'html');

/* uncomment after placing your favicon in /public */ 
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); 

/* Loggin in dev mode */
app.use(logger('dev'));
/* Middleware to read/write and other of json object */
app.use(bodyParser.json());
/* Middleware to read/write and other of urlencoded things  */
app.use(bodyParser.urlencoded({ extended: true }));
/* Middleware to read/write and other things of cookies */
app.use(cookieParser());

// front end enable by uncomment. 
app.use(express.static(path.join(__dirname, 'public')));

/* 
  Defining that all API calls need to be authanticated.
  This is token security to ensure permission in the app 
  when someone calls for /api/.... 
 */
app.use('/api',jwtCheck({
  secret: config.secret,
  userProperty: config.payload
}));



/* 
  ROUTES activated and telling app where the routes are  for "API" calls!

  Telling the app where to look for Helpers files that are used.  
  Telling the app where to look for API files that are used.  

  Used as followed --> app.use(require('./pathtoroutefile'));

  Other information about option
  If app.use('/api', require('./pathToRoute')); is used... talking about '/api'
  The app will put /api infront of the "router.get('/posts', function (req, res, next)" function 
  router.get('/api/posts', function (req, res, next)
  There for no need to add /api infront of all others in routeFiles! will be automatic
  Leading you to call the servies with /api/posts from the frontEnd to get response.  

*/

/* Route for the api documentation*/
//app.use('/apidoc', express.static('apidoc'));
app.use('/', require('./routes/index'));
/* Routes for the api */
app.use('/auth',                                 require('./routes/authentication'));
app.use('/api/user',                             require('./routes/users'));
app.use('/api/project',                          require('./routes/project'));
app.use('/api/reports',                          require('./routes/reports'));
app.use('/api/language',                         require('./routes/languages'));
app.use('/api/ramesinfo',                        require('./routes/rames_infos'));
app.use('/api/reporttype',                       require('./routes/reports_types'));
app.use('/api/reportsinfo',                      require('./routes/reports_info'));
app.use('/api/ramespicture',                     require('./routes/rames_pictures'));
app.use('/api/ramesquestion',                    require('./routes/rames_questions'));
app.use('/api/ramescategory',                    require('./routes/rames_categories'));
//app.use('/api/feedback/reports',                 require('./routes/feedback_reports'));
app.use('/api/feedback/reportsinfo',             require('./routes/feedback_reports_info'));
app.use('/api/questionradiochoices',             require('./routes/question_radio_choices'));
app.use('/api/feedback/ramesquestion',           require('./routes/rames_feedback_questions'));
app.use('/api/questioncheckboxchoices',          require('./routes/question_checkbox_choices'));
app.use('/api/questiondropdownchoices',          require('./routes/question_dropdown_choices'));
app.use('/api/feedback/questionradiochoices',    require('./routes/question_feedback_radio_choices'));
app.use('/api/feedback/questioncheckboxchoices', require('./routes/question_feedback_checkbox_choices'));


/* Exports the app. */

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
});
module.exports = app;


/*
  More logic about starting server, port and getting env configurations from cloud 
  If needed autmaticly hence the env configurations in nameOfApp/bin/www
*/



