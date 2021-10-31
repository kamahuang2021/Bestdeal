const {Router} = require('express')
const Car = require('../models/Car')
const auth = require('../middleware/auth')
const router = Router()

// Add new car.
router.post('/cars', auth, async (req, res) => {
    try {
        const {model, price, size, bought_time, comment} = req.body

        console.log(req.body)

        const car = new Car({
            model: model,
            price: price,
            size: size,
            bought_time: bought_time,
            create_time: Date.now(),
            comment: comment,
            likes: 0,
        })
        car.save()

        res.redirect('/cars/' + car._id)
        // res.status(201).json({car})
    } catch (e) {
        res.status(500).json({message: ''})
    }
})

// get car
router.get('/cars/:id', auth, async (req, res) => {
    const id = req.id
    const car = await Car.findById(id)
    res.json(car)
})


// edit car
router.post(
    '/cars/:id/edit',
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