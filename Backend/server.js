import express from "express"
import cors from "cors"
import { connectdb } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"





// app config

const app = express()
const port = 8000

// middleware
// to pass the data from fonternd to backend pass through json
app.use(express.json())
app.use(cors())// we can access backend to frontend


// db connection

connectdb()

// api end points

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API Working")
})// request the data from server 

app.listen(port, () => {// to start the server 
    console.log(`Server stated on http://localhost:${port}`);
})

// mongodb+srv://mauryarishu211:20135111@cluster0.nds8w.mongodb.net/?