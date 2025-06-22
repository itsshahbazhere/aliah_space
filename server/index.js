const express = require('express');
const app = express();

require('dotenv').config();
const {connectDB} = require('./config/database');
const PORT = process.env.PORT || 3000;

//connect to db
connectDB();
app.use(express.json());;

app.get('/', (req,res)=>{
    return res.json({
        success:true,
        message:'your server is running'
    });
});

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`);
});