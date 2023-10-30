import express from 'express';
import'dotenv/config';
const port = process.env.PORT;
const app = express();


app.get("/",(req,res)=>{
    res.json({message:"Hello there from server."})
})



app.listen(port,()=>{
    console.log("Server is running in port ",port);
})



