import { User } from "../models/Users.model.js";
import bycrypt from 'bcrypt';

const salt = 10;

export const login = async (req, res) => {
    try {
        console.log(req.body);
        
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error("Cannot find any account, please try again");

        const isMatch = bycrypt.compareSync(req.body.password, user.password);
        if (!isMatch) throw new Error("Authentication failed, dint match any");

        res.status(200).json({ message: "Login Succesfully", user })
    } catch (error) {
        console.log({ error })
        return res.status(502).json({ message: `Error : ${error}` });
    }
}

export const register = async (req, res) => {
    console.log(req.body);
    const hashedPassword = bycrypt.hashSync(req.body.password, salt);
    try {
        const property = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            level: 0,
            profile: "",
            exp: 0,
            trophy: 0,
            winrate: 100,
            match: 0
        }

        const user = await User.create(property);

        if (user) {
            return res.status(200).json({  title : "Your Account Regitsered", message: "Thanks for trusting us, now all of your progress on gamewill be safe on your account, gooduluck warrior!", user })
        }

    } catch (error) {
        console.log({ error })
        return res.status(502).json({ message: `Error : ${error}` });
    }

}

export const me = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            return res.status(200).json({ message: "Berhasil Menangkap profile data..", user })
        }

    } catch (error) {
        console.log({ error })
        return res.status(502).json({ message: `Error : ${error}` });
    }

}



export const logout = (req, res) => {

}


