const passport = require('passport');

const passportLocal = require('passport-local').Strategy;

passport.use(new passportLocal({
    usernameField : 'email'
}, async (email, password, done) => {
    try{
        console.log(email, password);
    }catch(err) {

        return done(null, false);
    }
}))


module.exports = passport;