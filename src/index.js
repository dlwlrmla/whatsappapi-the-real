import express from "express"
import router from "./routes/routes.js"
import dotenv from  "dotenv"
dotenv.config()
const PORT = 3000||process.env.PORT
const app = express()
app.use(express.json())
app.use('/whatsapp', router)

app.listen(PORT, () => {
    console.log(`running on http://localhost:3000/`)
    console.log(process.env.HOLA)
})