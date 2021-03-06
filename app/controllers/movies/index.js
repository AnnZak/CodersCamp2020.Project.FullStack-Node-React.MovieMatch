const MovieController = require("./MovieController");

// GET:
module.exports.searchMovies = (req, res) => { new MovieController(req, res).searchMovies() };
module.exports.showMovieDetails = (req, res) => { new MovieController(req, res).showMovieDetails() };
module.exports.showSuggestions = (req, res) => { new MovieController(req, res).showSuggestions() };
module.exports.showCollection = (req, res) => { new MovieController(req, res).showCollection() };

// POST:
module.exports.addMovieToLiked = (req, res) => { new MovieController(req, res).addMovieToLiked() };

// PATCH:
module.exports.toggleWatched = (req, res) => { new MovieController(req, res).toggleWatched() };

// DELETE:
module.exports.deleteMovieFromLiked = (req, res) => { new MovieController(req, res).deleteMovieFromLiked() };
