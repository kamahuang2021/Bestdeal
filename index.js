const express = require('express')
const config = require('./config/config.json')
const User = require('./controller/user')
const Car = require('./controller/car')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()

app.use(express.json({ extended: true }))
app.use(cors({
    origin: '*'
}))

app.use('/users', User)
app.use('/cars', Car)

const port = config.port || 5000

async function run() {
    try {
        await mongoose.connect(config.mongodb, {
            useNewUrlParser: true,
        })
        app.listen(port, () => console.log(`Server is listening on ${port}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

run()
