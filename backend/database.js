const mongoose = require('mongoose');
const connection = "mongodb+srv://username:mernbutton123%21@cluster0.jog7v.mongodb.net/mern?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));