import https from "https"
import dotenv from  "dotenv"
dotenv.config()

export const SendMessageWhatsApp = (textResponse, number) => {
    const data =JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": textResponse
            }
        })

        const options = {
            host: "graph.facebook.com",
            path: "/v16.0/115259601562338/messages",
            method : "POST",
            body : data,
            headers: {
                "Content-Type" : "application/json",
                Authorization: "Bearer "+process.env.BARIER
            }
        }

        const req = https.request(options, res => {
            res.on("data", d => {
                //process.stdout.write(d)
            })
        })

        req.on("error", error => {
            console.error(error)
        })
        req.write(data)
        req.end()

}