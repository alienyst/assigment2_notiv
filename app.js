require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(routes);

const PORT = 4000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
