import dotenv from  "dotenv"
import { Process } from "../shares/processMessage.js"
dotenv.config()


const accessToken = process.env.ACCESSTOKEN
const token = 'aloalo'
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
        let formato = req.body
         var number =req.body.entry[0].changes[0].value.messages[0].from;
        var textazo =req.body.entry[0].changes[0].value.messages[0].text.body;
        var textazo2 = req.body.entry[0].changes[0].value.messages[0]
        console.log("textazo",textazo,"textazo2" ,textazo2, number)

        if(textazo!= null && textazo2 != null){


            try {
                if(textazo != ""){
                    Process(textazo, number)
                }
                
            } catch (error) {
                console.error(error)                
            }
        }

        res.send("EVENT_RECEIVED")
    } catch (error) { 
        console.error(error.message)
        res.send("EVENT_RECEIVED")
    }

}

const GetTextUser = (messages) => {
    if(messages.type == "text"){
        console.log("tipo texto")
    }else if( messages != null && messages.type != 'text' && messages.type == 'interactive'){
        if(messages.interactive.type== "list"){
            console.log("list")
        }else if (messages == "list"){
            console.log("lista")
        }else{
            console.log("sin mensaje")
        }
    }else{
        console.log("sin mensaje void 2 de gettext user")
        console.log(messages.type)
    }
}

