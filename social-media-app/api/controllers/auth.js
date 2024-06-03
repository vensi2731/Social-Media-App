import { db } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = (req, res) => {
    //check uer if exists

    const q = "select * from users where username=?"
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length) return res.status(409).json("User already exists!")
        //create new user
        //hash the pasword

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const q = "Insert into users(`username`,`email`,`password`,`name`)value (?)"
        const values = [req.body.username, req.body.email, hashedPassword, req.body.name]
        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.status(200).json("User has been created");
        })
    })
}

export const login = (req, res) => {
    const q="select * from users where username=?"
    db.query(q,[req.body.username],(err,data)=>{
        if (err) return res.status(500).json(err)
        if(data.length===0) return res.status(404).json("User not found")

        const checkPassword=bcrypt.compareSync(req.body.password,data[0].password)

        if(!checkPassword) return res.status(400).json("wrong password or username");

        const token=jwt.sign({id:data[0].id},"secretkey")//set token

        const {password, ...others}=data[0]//for not taking password only another fields are gonna take

        res.cookie("accessToken",token,{
            httpOnly:true,
        }).status(200).json(others);
    });
};

export const logout = (req, res) => {
    res.clearCookie("accessToken",{
        secure:true,
        sameSite:"none"
    }).status(200).json("user has been logged out")
}