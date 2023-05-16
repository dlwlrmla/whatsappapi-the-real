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

export const SampleImage = (textResponse, number) => {
    const data =JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "image",
            "image": {
                "link" : "data:image/jpeg;base64,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"
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
export const SampleDocument = (textResponse, number) => {
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