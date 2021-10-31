const {Router} = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const router = Router()

// SignUp
router.post(
    '/users/register',
    async (req, res) => {
        console.log(req.body)
        try {
            const {email, password, full_name} = req.body
            const res = await User.findOne({email})

            if (res) {
                return res.status(400).json({message: 'User already exists'})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email: email, password: password, hashed_password: hashedPassword, full_name: full_name})
            user.save(function (err) {
                if (err) {
                    res.status(500).json({message: 'Server cannot create new user'})
                }
            })


            res.status(201).json({message: 'Create User successfully'})

        } catch (e) {
            res.status(500).json({message: 'Failed to register user'})
        }
    })

// /users/login
router.post(
    '/users/login',
    async (req, res) => {
        try {
            const {email, password} = req.body

            const user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({message: 'Cannot find user'})
            }

            const isMatch = await bcrypt.compare(password, user.hashed_password)

            if (!isMatch) {
                return res.status(400).json({message: 'User password mismatch'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )

            res.json({token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: 'Failed to login user'})
        }
    })

// get user
router.get('/users/:id', async (req, res) => {
    const id = req.id
    const user = await User.findById(id)
    res.json(user)
})


// edit user
router.post(
    '/users/:id/edit',
    async (req, res) => {
        const id = req.id
        const {password, full_name} = req.body

        await User.findByIdAndUpdate(id, {password: password, full_name: full_name}, function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log("Updated User : ", docs);
            }
        })

        res.redirect('/')
    })


module.exports = router;