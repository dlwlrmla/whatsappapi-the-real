import express from "express"
import router from "./routes/routes.js"
import dotenv from  "dotenv"
import {pool} from "./db.js"
dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use('/whatsapp', router)

app.listen(PORT, async () => {
    console.log(`running on http://localhost:3000/`)
   const [asn] = await pool.query('Select * from personas')
    console.log(asn) 
})