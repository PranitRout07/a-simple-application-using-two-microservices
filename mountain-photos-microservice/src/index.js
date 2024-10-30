import express from "express"
import Photos from "./mountainPhotos.js"
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json())



app.get("/api/mountains",(req,res)=>{
    res.json(Photos)
})

app.listen(3143,()=>{
    console.log("Listening on port 3143...")
})
