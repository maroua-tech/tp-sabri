const express = require('express')
const app = express()


app.use(express.json());

const cors = require('cors');
app.use(cors());


// routes
const parkingsRouter = require('./routes/parkings');
console.log("object")


app.get('/', (req, res, next) => {
     console.log('home')
})
// // routes
app.use('/parkings', parkingsRouter);


app.listen(3000, () => {
    console.log('server')
})