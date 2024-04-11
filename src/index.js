const express = require('express');
const app = express();
app.use('/', function(req,res){
    return  res.send('Hello, World!');
});

app.listen( 3000, function () {
    console.log('Express app running on port ' +  3000)
});
