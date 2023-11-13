require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');
const authenticateToken = require('./middleware/token');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/movies', movieRoutes);

app.get('/protected', authenticateToken, (req, res) => {
  res.send('Secret Love');
});

const PORT = 4000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database Connected!');
});
