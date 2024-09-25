const { log } = require('console');
const express = require('express'); 
const { start } = require('repl');
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
  res.send('I am a server');
})

app.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
  
})

