const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res)=> {
    res.status(200).send("Hey hassaan this is your landing page ;)")
});

app.get('/about', (req, res)=> {
    res.status(200).send("And this is your ABOUT page ;)")
});


app.listen(PORT, ()=>{
    console.log(`Site is running on port ${PORT}`);
    
})