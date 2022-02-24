
const Movie = require("./model");

exports.addMovie = async (title, actor) => {
    try {
        await Movie.create({title: title, actor: actor});
        return "Success";
    } catch (error) {
        console.log(error)
    }
}

exports.list = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
}