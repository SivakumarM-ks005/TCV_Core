const express = require('express');
const connection = require('../connection');


// const login = async (req, res) => {
//     const user = req.body;
//     query = "SELECT * FROM user WHERE userName=?";
//     connection.query(query, [user.userName], (error, results) => {
//         try {
//             const existing = results[0];    
//             console.log(existing)       
//             if (results.length <= 0 || user.password != existing.password) {
//                 return res.status(401).json({
//                     message: "Wrong user name or password, Please provide correct one"
//                 })
//             } else if (existing.Status === false) {
//                 return res.status(401).json({
//                     message: "Waiting for admin approval"
//                 })
//             } else if (existing.password === user.password) {
//                 const response = { userName: existing.userName, role: existing.role }
//                 const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: '8h' })
//                  return res.status(200).json({
//                     token: accessToken
//                 })
//             } else {
//                 return res.status(400).json({
//                     message: "Something went wrong please try again"
//                 })
//             }

//         } catch (error) {
//             return res.status(500).json(error);
//         }
//     })
// }

const login = async (req, res) => {
    const user = req.body;
    query = "select userName,password, role, Status from user where userName=?";
    connection.query(query, [user.userName], (error, results) => {
        try {
            if (results.length <= 0 || results[0].password != user.password) {
                return res.status(401).json({ message: "Incorrect user name or password" });
            }
            else if (results[0].status === 'false') {
                return res.status(401).json({ message: "Waiting for admin approval" });
            }
            else if (results[0].password === user.password) {
                const response = { userName: results[0].userName, role: results[0].role }
                const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: '8h' });
                res.status(200).json({ token: accessToken });
            } else {
                return res.status(500).json({
                    message: "Something went wrong, please try some time later"
                })
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    })
}
module.exports = { login }