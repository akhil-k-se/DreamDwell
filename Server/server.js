const express = require('express');
const dbConnect= require("./Middlewares/dB")
const port =1218;
const app= express();
const cors = require('cors');
const buyerController = require("./Controllers/buyerController");
const { Buyer, buyerSchema } = require('./Models/Buyer');

app.use(express.json());
app.use(cors());

dbConnect();

app.get("/",(req,res)=>{
    console.log("Hello");
})

app.post("/addBuyer", buyerController.addBuyer);
app.get("/getting",async (req,res)=>{
    res.json({
        buyerSchema
    })
})

app.listen(port,()=>{
    console.log(`Server started on ${port}`);
});