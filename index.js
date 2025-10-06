const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/TnLZPdp69XzvVXGn7";

app.get('/', (req, res) => {
  res.redirect(GOOGLE_MAPS_URL);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});