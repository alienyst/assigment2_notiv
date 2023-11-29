const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");

const registerUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = await userRepository.createUser({
        ...userData,
        password: hashedPassword,
    });
    return newUser;
};

const loginUser = async (email, password) => {
    const user = await userRepository.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid username/password");
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
    return { token, name: user.name, role: user.role, id: user.id };
};

module.exports = {
    registerUser,
    loginUser,
};
