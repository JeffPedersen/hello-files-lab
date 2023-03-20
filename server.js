const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public')) // NOT THE SAME AS const app = express();

app.get('/what', (request, response) => {
    response.send('I said what what?')
    });

app.get('/whatgoeshere', (request, response) => {
    response.sendFile(__dirname + "/public/file.html")
    });
console.log(`pathday: `, __dirname); 




app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});