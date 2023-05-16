export const SampleText = (textResponse, number) => {
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

        return data 
}

export const SampleImage = ( number) => {
    const data =JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "image",
            "image": {
                "link": ""
            }
        })

        return data 
}

export const SampleAudio = (textResponse, number) => {
    const data =JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "audio",
            "audio": {
                "link" : "'"
            }
        })

        return data 
}
export const SampleVideo = (textResponse, number) => {
    const data =JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "video",
            "video": {
                "link" : "'"
            }
        })

        return data 
}
export const SampleDocument = ( number) => {
    const data =JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "document",
            "document": {
                "link" : "https://www.drrevengagiertych.com/wp-content/uploads/2022/11/PERIOSTITIS-TIBIAL_compressed.pdf"
            }
        })

        return data 
}

export const SampleButtons = (textResponse, number) => {
    const data =JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type" : "button",
                "body" : {
                    "text" : "confirmas tu registro?"
                },
                "action" : {
                    "buttons" : [
                        {
                            "type":"reply",
                            "reply": {
                                "id" : "001",
                                "title": "Si"
                            }
                        },{
                            "type":"reply",
                            "reply": {
                                "id" : "001",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        })

        return data 
}