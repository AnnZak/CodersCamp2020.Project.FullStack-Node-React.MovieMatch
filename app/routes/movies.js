const router = require("express").Router();
const moviesController = require("../controllers/movies");
const tokenVerification = require("../middlewares/tokenVerification");

// GET:
router.get("/", tokenVerification, moviesController.searchMovies);
router.get("/suggest", tokenVerification, moviesController.showSuggestions);
router.get("/:movieid", tokenVerification, moviesController.showMovieDetails);
router.get("/collection/:userid", tokenVerification, moviesController.showCollection);

// POST:
router.post("/:movieid", tokenVerification, moviesController.addMovieToLiked);

// PATCH:
router.patch("/:movieid", tokenVerification, moviesController.toggleWatched);

// DELETE:
router.delete("/:movieid", tokenVerification, moviesController.deleteMovieFromLiked);

module.exports = router;
