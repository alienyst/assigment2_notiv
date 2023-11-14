const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, username, email, password, role, address, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      role,
      address,
      phoneNumber
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log(token)
      res.json({ token, "name" :user.name, "role":user.role, "id":user.id});
    } else {
      res.status(401).send({error:"Unathorized",message:"Invalid username/password"});
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
