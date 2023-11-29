const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const newUser = await authService.registerUser(req.body);
        const { password, updatedAt, createdAt, ...rest } = newUser.dataValues;
        res.json({'message':'Success creating new user', ...rest});
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const login = async (req, res) => {
    try {
        const result = await authService.loginUser(req.body.email, req.body.password);
        res.json(result);
    } catch (error) {
        res.status(401).send({ error: "Unauthorized", message: "Invalid username/password" });
    }
};

module.exports = {
    register,
    login
};
