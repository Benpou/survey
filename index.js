const express = require('express');
const passport = require('passport');
const GoogleStratrgy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStratrgy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret
}));

app.get('/', (req, res) => {
  res.send({bye: 'buddy'})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log('app is running');
