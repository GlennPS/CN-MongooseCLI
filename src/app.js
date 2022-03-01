
require("./db/connection");
const mongoose = require("mongoose")
const yargs = require("yargs");
const { addMovie, list } = require("./movie/functions");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            console.log(await addMovie(yargsObj.title, yargsObj.actor));
    // ADD property functionality> node src/app.js --add --title "..", --actor ".."
        } else if (yargsObj.list) {
            console.log(await list());
    // LIST recall functionality> node src/app.js --list

    //     } else if (yargsObj. ) { //insert Obj. updatefunc

    // // UPDATE functionality>
        } else if (yargsObj. ) { //insert Obj. deletefunc

            
    // DELETE functionality> 
        } else {
            console.log("Incorrect command");
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);
