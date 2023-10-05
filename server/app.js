const express = require("express")
const mongoose = require("mongoose")
const alienRouter = require('./routes/aliens')
const url = 'mongodb+srv://abhiram128:abhiram128@cluster0.h4j9jok.mongodb.net/CBIT?retryWrites=true&w=majority'
const app = express()
const cors = require("cors")
mongoose.connect(url)
const con = mongoose.connection
con.on('open',()=>
{
    console.log('Mongo db database connected')
}) 
app.use(cors())
app.use(express.json())
app.use('/aliens',alienRouter)
app.listen(9000,()=>
{
    console.log("Server running on port 9000")
})