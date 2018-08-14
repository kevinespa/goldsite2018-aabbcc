const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

//mongoose.connect('mongodb://sitegold:cristo100%@goldsite-shard-00-00-izmvl.mongodb.net:27017,goldsite-shard-00-01-izmvl.mongodb.net:27017,goldsite-shard-00-02-izmvl.mongodb.net:27017/test?ssl=true&replicaSet=goldsite-shard-0&authSource=admin&retryWrites=true',{ useNewUrlParser: true );




 

app.set('port', process.env.PORT || 3000);

//settings
app.listen(app.get('port'), ()=>{

  console.log('server on port', app.get('port'));

});

//middlewares
