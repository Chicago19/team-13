const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const emailing = require("./routes/emailing");


app.use(cors());
app.use(bodyParser.json());
app.use("/api/email", emailing);



app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


