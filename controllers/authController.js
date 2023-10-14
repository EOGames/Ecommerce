const { hashPassword } = require('../helpers/authhelper.js');
const userModel = require('../models/userModel');

module.exports.registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        //validation
        if (!name || !email || !password || !phone || !address) {
            return res.status(400).json({ success: false, message: 'all fields mandatory' });
        }

        //check user
        const exisitingUser = await userModel.findOne({ email: email });
        if (exisitingUser) {
            return res.status(200).send({ success: true, message: `Already registred please login` });
        }

        // register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = new userModel({
            name, email, password: hashedPassword, phone, address
        });
        await user.save();

        return res.status(201).send({ success: true, message: 'User registered successfully', user });
    } catch (error) {
        console.log(`Error While Registration ${error}`);
        return res.status(500).send({ success: false, message: 'Error in Registration', error });
    }
}


