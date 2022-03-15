// Handles the /login endpoint

const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
const {CreateToken} = require('./JWT')

async function Login(req, res) {
    let username = req.body.username
    const password = req.body.password

    const user = await User.findOne({ username, password })
    if (!user) {
        const user1 = await User.findOne({ email: username, password })

        if (!user1) {
            res.status(400).send("Invalid password or username")
            return
        }

        // Email is used to login
        
        username = user1.username
    }
    
    res.status(200).json({ accessToken: CreateToken(username) })
}

module.exports = Login