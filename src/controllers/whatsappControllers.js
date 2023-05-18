import fs from "fs"
import { SendMessageWhatsApp } from "../services/whatsappServices.js"
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"))

export const verifyToken = (req,res) => {

    try {
       var accessToken = "fkjsdklfjs"
       var token = req.query["hub.verify_token"]
       var challenge = req.query["hub.challenge"] 

        if(challenge != null && token != null && token == accessToken){
            res.send(challenge)
        }

    } catch (e) {
        res.status(400).send()
    }

}

export const receivedMessage = (req, res) => {
    try {
        var entry = (req.body["entry"])[0]
        var changes = (entry["changes"])[0]
        var value = changes["value"]
        var messageObject = value["messages"]

        if(typeof messageObject != undefined){
            var messages = messageObject[0]
            var number = messages["from"]
            var text = GetTextUser(messages)
            console.log(text)
            myConsole.log(text)
            SendMessageWhatsApp("el usuario dijo " + text, number)
        }

        //myConsole.log(messageObject)
        //console.log(messageObject)

      
        
        res.send("EVENT_RECEIVED")     
    } catch (e) {
        console.error(e.error)
        res.send("EVENT_RECEIVED")    
    }
}


const GetTextUser = (messages) => {
    var text = ""

    var typeMessage = messages["type"]

    if(typeMessage == "text"){

        text = (messages["text"])["body"]

    }else if(typeMessage == "interactive"){

        var interactiveObject = messages["interactive"]
        var typeInteractive = interactiveObject["type"]

        if(typeInteractive == "button_reply"){

            text = (interactiveObject["button_reply"])["title"]

        }else if (typeInteractive == "list_reply"){

            text = (interactiveObject["list_reply"])["title"]

        }else{
            myConsole.log("sin mensaje")
        }
    }else{

        myConsole.log("sin mensaje")
    }
    return text
}