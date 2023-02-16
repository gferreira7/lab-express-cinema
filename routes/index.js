const express = require('express')
const MoviesModel = require('../models/Movies.model')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))
router.get('/movies', async (req, res) => {
  try {
    let foundMovies = await MoviesModel.find()
    res.render('movies', { foundMovies })
  } catch (error) {
    console.log(error)
  }
})

router.get('/movies/:id', async (req, res) => {
  try {
    const { movieId } = req.params.id
    
    let foundMovie = await MoviesModel.findById(req.params.id)
    console.log(foundMovie)
    res.render('movie-detail', foundMovie)

  } catch (error) {
    console.log(error)
  }
})

module.exports = router
