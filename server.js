const express = require('express');
const app = express();
const port = 3000;


app.get("/", (req, res)=>{
    res.send("Welcome to my app")
});

app.get('/frank', (req,res) => {
    res.send("Hello frank")
});

app.listen(port, ()=>console.log("Listening"));
