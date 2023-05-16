import { MessageText } from "./whatsappModels.js";
import { SendMessageWhatsApp } from "../services/whatsappService.js";

export const Process = (text, number) => {
    text = text.toLowerCase()
    let models = []

    if(text.includes('hola')){
        //SALUDAR
        let model = MessageText("hola, un gusto saludarte", number)
        models.push(model)
    }else if(text.includes('gracias')){
        //AGRADECER
        let model = MessageText("gracias a ti", number)
        models.push(model)
    }else if(text.includes('adios' || text.includes('chao'))){
        //DESPEDIR
        let model = MessageText("xao", number)
        models.push(model)
    }else{

        let model = MessageText("no entiendo nada", number)
        models.push(model)
    }

    models.forEach(model => {
        SendMessageWhatsApp(model)
    });

}
