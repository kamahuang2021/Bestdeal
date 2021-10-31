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

// app.get('/cars', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.header("Access-Control-Allow-Origin", "*");
//     res.send([
//         {
//             name: 'a',
//             price: 1,
//             comment: 'this is a'
//         },
//         {
//             name: 'b',
//             price: 2,
//             comment: 'this is b'
//         },
//         {
//             name: 'c',
//             price: 3,
//             comment: 'this is c'
//         },
//         {
//             name: 'd',
//             price: 4,
//             comment: 'this is d'
//         }
//     ])
// })
//
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })