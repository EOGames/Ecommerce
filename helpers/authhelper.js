const bcrypt = require('bcrypt');

module.exports.hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPasword = await bcrypt.hash(password, saltRounds);
        console.log(`\n hashed password::::::::::::${hashedPasword}`);
        return hashedPasword;
    } catch (error) {
        console.log(`Error while hashing password ${error}`);
        return null;
    }
}

module.exports.comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}