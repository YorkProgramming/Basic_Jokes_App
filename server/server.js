const express = require('express');
const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

require('./routes/jokes.routes')(app);

// same as

//const JokeRoutes = require('./routes/jokes.routes');
//jokesRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));