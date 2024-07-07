const express=require('express');
const app = express();
const port = process.env.PORT //3000;
app.set('/',(req,res)=>{
    res.send('Hello from the other side!');
})
app.post('/students',(req,res)=>{
    res.send("Hello from the other side!");
})

app.listen(port,()=>{
    console.log('connction is setup at ${port}');
})
