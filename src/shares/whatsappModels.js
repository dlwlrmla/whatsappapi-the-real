export const MessageText = (textResponse, number) => {
    const data =JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": number,
            "type": "text",
            "text": {
                "preview_url": true,
                "body": textResponse
            }
        })

        return data 
}


export const SampleList = (number) => {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "list",
                "header": {
                    "type": "text",
                    "text": "<HEADER_TEXT>"
                },
                "body": {
                    "text": "<BODY_TEXT>"
                },
                "footer": {
                    "text": "<FOOTER_TEXT>"
                },
                "action": {
                    "button": "<BUTTON_TEXT>",
                    "sections": [
                        {
                            "title": "<LIST_SECTION_1_TITLE>",
                            "rows": [
                                {
                                    "id": "<LIST_SECTION_1_ROW_1_ID>",
                                    "title": "<SECTION_1_ROW_1_TITLE>",
                                    "description": "<SECTION_1_ROW_1_DESC>"
                                },
                                {
                                    "id": "<LIST_SECTION_1_ROW_2_ID>",
                                    "title": "<SECTION_1_ROW_2_TITLE>",
                                    "description": "<SECTION_1_ROW_2_DESC>"
                                }
                            ]
                        },
                        {
                            "title": "<LIST_SECTION_2_TITLE>",
                            "rows": [
                                {
                                    "id": "<LIST_SECTION_2_ROW_1_ID>",
                                    "title": "<SECTION_2_ROW_1_TITLE>",
                                    "description": "<SECTION_2_ROW_1_DESC>"
                                },
                                {
                                    "id": "<LIST_SECTION_2_ROW_2_ID>",
                                    "title": "<SECTION_2_ROW_2_TITLE>",
                                    "description": "<SECTION_2_ROW_2_DESC>"
                                }
                            ]
                        }
                    ]
                }
            }
        }
    )
    return data
}

export const MessageButton = ( number) => {
    const data =JSON.stringify(
        {
            "messaging_product": "whatsapp",  
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive" : {
                "type" : "button",
                "body" : "selecciona uno de los productos"
            },
            "action" : {
                "buttons": [
                    {
                        "type" : "reply",
                        "reply": {
                            "id" : "001",
                            "title" : "Si"
                        }
                    },
                    {
                        "type": "reply",
                        "reply":{
                            "id" : "002",
                            "title" : "No"
                        }
                    }
                ]
            }
        }
    )
             return data 
}
