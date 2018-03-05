const express = require('express');
const GoogleStratrgy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStratrgy());

app.get('/', (req, res) => {
  res.send({bye: 'buddy'})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log('app is running');
