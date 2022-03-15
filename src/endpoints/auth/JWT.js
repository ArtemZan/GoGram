const jwt = require('jsonwebtoken')

function CreateToken(username) {
    return jwt.sign({ name: username }, process.env.ACCESS_TOKEN_SECRET)
}

function Authenticate(req, res, next) {
    const header = req.headers['authorization']
    const token = header && header.split(' ')[1]

    
    if (!token) {
        return res.sendStatus(401)
    }
    
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (e, user) => {
        if (e)
        return res.sendStatus(403)
        
        req.user = {name: user.name}
        
        next()
    })
}

module.exports = {
    CreateToken,
    Authenticate
}