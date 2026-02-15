const express = require('express');
const connection = require('../connection');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const user = req.body;
    query = "SELECT * FROM user WHERE userName=?";
    connection.query(query, [user.userName], (error, results) => {
        try {
            const existing = results[0];  
            if (results.length <= 0 || user.password != existing.password) {
                return res.status(401).json({
                    message: "Wrong user name or password, Please provide correct one"
                })
            } else if (existing.Status === 'false') {
                return res.status(401).json({
                    message: "Waiting for admin approval"
                })
            } else if (existing.password === user.password) {
                const response = { userName: existing.userName, role: existing.role }
                const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: '8h' })
                console.log('test');
                return res.status(200).json({
                    token: accessToken,
                    message: "Logged in"
                })
            } else {
                return res.status(400).json({
                    message: "Something went wrong please try again"
                })
            }

        } catch (error) {
            return res.status(500).json(error);
        }
    })
}


module.exports = { login }