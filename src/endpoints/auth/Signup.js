// Handles the /signup endpoint

const express = require('express')
const jwt = require('jsonwebtoken')
const Profile = require('../../models/Profile')
const User = require('../../models/User')
const { CreateToken } = require('./JWT')

async function Signup(req, res) {
    const username = req.body.username
    const email = req.body.email

    const foundByUsername = await User.exists({ username })
    if (foundByUsername) {
        res.status(400).json({ errorCode: 1, errorMessage: "User with such username already exists" })
        return;
    }

    const foundByEmail = await User.findOne({ email })
    if (foundByEmail) {
        res.status(400).json({ errorCode: 2, errorMessage: "User with such email already exists" })
        return;
    }

    try {
        const user = new User({
            username,
            email,
            password: req.body.password
        })

        const profile = new Profile({
            username,
            description: req.body.description,
            picture: req.file.path
        })

        res.status(200).json({ accessToken: CreateToken(username) })

        await user.save()
        await profile.save()
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = Signup