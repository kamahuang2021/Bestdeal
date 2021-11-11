const jwt = require('jsonwebtoken') //Nice
const config = require('../config/config.json')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"

        if (!token) {
            return res.status(401).json({ message: 'Invalid Token' })
        }

        const decoded = jwt.verify(token, config.jwtSecret)
        req.user = decoded
        next()

    } catch (e) {
        res.status(401).json({ message: 'Failed to authenticate ' + e })
    }
}
