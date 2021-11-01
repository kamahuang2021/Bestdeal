const {Router} = require('express')
const Car = require('../models/Car')
const auth = require('../middleware/auth')
const router = Router()

// Add new car.
router.post('/', auth, async (req, res) => {
    try {
        const {model, price, size, bought_time, comment} = req.body

        const car = new Car({
            model: model,
            price: price,
            size: size,
            bought_time: bought_time,
            create_time: Date.now(),
            comment: comment,
            owner: req.user.userId,
            likes: 0,
        })

        car.save(function (err) {
            if (err) {
                console.log(err)
                res.status(500).json({message: 'Server cannot create new car'})
            }
        })

        res.redirect('/cars/' + car._id)
        // res.status(201).json({message: 'Create Car successfully'})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: ''})
    }
})

// Get all cars
router.get('/', auth, async (req, res) => {
    try {
        Car.find({}).populate('owner', {full_name: 1}).exec(function (error, user) {
            if (error) {
               res.status(500).json({message: error})
            }
            console.log(user)
            res.json(user)
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({message: ''})
    }
})

// get car
router.get('/:id', auth, async (req, res) => {
    console.log(req.params)
    const id = req.params.id
    const car = await Car.findById(id).populate('owner', {full_name: 1})
    console.log(car)
    res.json(car)
})

// delete car
router.delete('/:id', auth, async (req, res) => {
    console.log(req.params)
    const id = req.params.id
    Car.remove({_id: id}, (err, result) => {
        if (err) return console.log(err)
        res.redirect('/cars')
    })
})


// edit car
router.post(
    '/:id/edit',
    auth,
    async (req, res) => {
        const id = req.id
        const {model, price, size, bought_time, comment} = req.body

        await Car.findByIdAndUpdate(id, {
            model: model,
            price: price,
            size: size,
            bought_time: bought_time,
            comment: comment
        }, function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log("Updated Car : ", docs);
            }
        })

        res.redirect('/')
    })


module.exports = router;