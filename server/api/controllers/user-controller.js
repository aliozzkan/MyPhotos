const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const register = (req, res) => {
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        const newUser = new User({
            _id: new mongoose.Types.ObjectId,
            name: req.body.name,
            username: req.body.username,
            password: hash
        })

        newUser.save().then(response => {
            res.status(201).json({
              message: 'User registered!',
              user: {
                id: response._id,
                username: response.username,
                name: response.name,
                follow: response.follow,
                follower: response.follower,
                img: response.img
              }
            })
          }).catch(err => {
            req.status(500).json({
              message: 'Error Register'
            })
          })

      })
  })
}

const login = (req, res) => {
  User.findOne({username: req.body.username}).exec()
    .then(user => {
      if(!user) { return res.status(500).json({message: 'Auth Failed'}) }

      bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
        if(!isMatch) { return res.status(500).json({message: 'Auth Failed'}) }

        const sendUser = {
          id: user._id,
          username: user.username,
          name: user.name,
          follow: user.follow,
          follower: user.follower,
          img: 'http://' + req.headers.host + '/uploads/' + (user.img==null?'default.jpg':user.img)
        }

        const token = jwt.sign(sendUser, 'secret_key', {expiresIn: '1h'})

        res.status(201).json({
          message: 'Auth Success',
          user: sendUser,
          token
        })
      })
    }).catch(err => {
      res.status(500).json({
        message: 'Auth Failed'
      })
    })
}
module.exports = {
  register,
  login
}
