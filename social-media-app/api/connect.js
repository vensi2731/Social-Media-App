import mysql from "mysql"

export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Qwerty@123",
    database:"social"
})