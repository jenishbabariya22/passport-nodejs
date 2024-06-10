const express = require('express');

const port = 8000;

const app = express();

app.set('view engine', 'ejs');

const passport = require('passport');
const passportLocal = require('./config/passportlocalstrategy');
const session = require('express-session');

app.use(session({
    name : 'rnw',
    secret: 'mahadev',
    saveUninitialized : true,
    resave : false,
    cookie : {
        maxAge: 1000 * 60 * 60
    }
}))
 


app.use(express.urlencoded());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log("server is not run");
        return false;
    }
    console.log(`server is start on port :- ${port}`);
})