const express = require("express")
const router = express.Router()

const parkings = require("../parkings.json")
router.route('/').get((req, res, next) => {
    res.status(200).json(parkings)

}).post((req, res, next) => {
    parkings.push(req.body)
    // console.log(req.body)
    
    res.status(200).json(parkings)

})


router.route('/:id').get((req, res, next) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)

}).delete((req, res, next) => {
    const id =
        parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking), 1)
    res.status(200).json(parkings)
}).put((req, res, next) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name = req.body.name,
    parking.city = req.body.city, parking.type = req.body.type,
    res.status(200).json(parking)

})

module.exports = router;