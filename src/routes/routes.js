import express from "express"
import { receivedMessage, verifyToken } from "../controllers/whatsappController.js"
const router = express.Router()


router
.get('/', verifyToken)
.post('/', receivedMessage)

export default router