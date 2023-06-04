const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup needed."],
        minlength: [5, "Please make a proper joke, at least 5 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline needed."],
        minlength: [6, "Not long enough punchline, 6 characters needed."]
    }
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;

// same as

// module.exports = mongoose.model("Joke", JokeSchema);