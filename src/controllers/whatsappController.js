import dotenv from  "dotenv"
import {SendMessageWhatsApp} from "../services/whatsappService.js"
dotenv.config()

export const verifyToken = (req, res) => {

    try {
        var accessToken = process.env.ACCESSTOKEN
        var token = req.query["hub.verify_token"]
        var challenge = req.query["hub.challenge"]

        if(challenge != null && token != null && token == accessToken){
            res.send(challenge)
        }else if (challenge == null){
           res.status(400).send("challenge null") 
        }else if (token == null){
           res.status(400).send("token null") 
        }else{
           res.status(400).send("token not like acctoken") 
        }
        
    } catch (error) {
        res.status(400).send("server internal error")
    }



    res.send(accessToken)
}

export const receivedMessage = (req, res) => {
    try {

        var entry = (req.body["entry"])[0]
        var changes = (entry["changes"])[0]
        var value = changes["value"]
        var messageObject = value["messages"]


        if(typeof messageObject != "undefined"){
            var messages = messageObject[0]
            var number = messages["from"]
            var text = GetTextUser(messages)
            console.log(text)
            SendMessageWhatsApp("texto" + text, number)
        }

        console.log(text)

        res.send("EVENT_RECEIVED")
    } catch (error) { 
        console.error(error.message)
        res.send("EVENT_RECEIVED")
    }

}

const GetTextUser = (messages) => {
    var text =""
    var typeMessage = messages["type"]
    if(typeMessage == "text"){
        text = (messages["text"])["body"]
    }else if(typeMessage=="interactive"){
        var interactiveObject = messages["interactive"]
        var typeInteractive = interactiveObject["type"]
        console.log(interactiveObject)
        if(typeInteractive == "button_reply"){
            text = (interactiveObject["button_reply"])["title"]
        }else if (typeInteractive == "list_reply"){
            text = (interactiveObject["list_reply"])["title"]
        }else{
            console.log("sin mensaje")
        }
    }else{
        console.log("sin mensaje")
    }
    return text
}