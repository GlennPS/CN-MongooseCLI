
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
//says a title is required
        unique: true,
//says title must only exist once
    },
    actor: {
        type: String,
        default: "Not specified",
//if nothing is inputted default value is the output
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

