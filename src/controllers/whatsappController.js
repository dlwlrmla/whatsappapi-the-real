import dotenv from  "dotenv"
dotenv.config()

export const verifyToken = (req, res) => {

    try {
        var accesToken=process.env.ACCESSTOKEN
        var token = req.query["hub.verify_token"]
        var challenge = req.query["hub.challenge"]

        if(challenge!= null && token!= null && token == accesToken){
            res.send(challenge)
        }else{
            res.status(400).send()
        }

    } catch (error) {
        res.status(400).send()
    }


    res.send("verify Token")
}

export const receivedMessage = (req, res) => {
    res.send("reveived")
}