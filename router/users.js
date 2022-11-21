const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/user')

//Read
router.get('/users', usercontroller.index)

//Show
router.get('/user/:id', usercontroller.show)

//Add / Insert
router.post('/user', usercontroller.store)

//Edit / Update
router.put('/user/:id', usercontroller.update)

//Delete
router.delete('/user/:id', usercontroller.delete)

module.exports = router