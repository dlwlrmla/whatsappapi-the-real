import dotenv from  "dotenv"
import axios from 'axios'
import {SendMessageWhatsApp} from "../services/whatsappService.js"
dotenv.config()


const accessToken = process.env.ACCESSTOKEN
const token = ''
export const verifyToken = (req, res) => {

    try {
        token = req.query["hub.verify_token"]
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

/*          var entry = (req.body["entry"])[0]
        var changes = (entry["changes"])[0]
        var value = changes["value"]
        var messageObject = value["messages"]  */
        var number =req.body.entry[0].changes[0].value.messages[0].from;
        var textazo =req.body.entry[0].changes[0].value.messages[0].text.body;
        //SendMessageWhatsApp(textazo)
        console.log(number)
/*  
         if(typeof textazo.type != "undefined"){
            var number = messages["from"]
            var text = GetTextUser(messages)
            console.log(text)
            SendMessageWhatsApp("texto" + text, number)
        }   */

        console.log(textazo)
        try {
            SendMessageWhatsApp(textazo, number)
        } catch (error) {
           console.error(error.message) 
        }

/*         try {
             axios({
                method: "POST",
                url: `https://graph.facebook.com/v16.0/115259601562338/messages?access_token=${token}`,
                data: {
                    
                        "messaging_product": "whatsapp",    
                        "recipient_type": "individual",
                        "to": number,
                        "type": "text",
                        "text": {
                            "preview_url": false,
                            "body": textazo
                        }
                },
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "BARIER "+process.env.BARIER
                }
            }) 
            console.log(axios.url)
            res.status(200).send("a")
        } catch (error) {
            res.status(400).send("axios error")
            console.error(error)
        } */

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


const send = (text, number) => {

}