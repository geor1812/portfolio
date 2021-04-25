const express = require('express');
const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("The server is running on port", server.address().port);
});