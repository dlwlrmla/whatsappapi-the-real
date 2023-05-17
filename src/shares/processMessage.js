import { MessageButton, MessageText, SampleList } from "./whatsappModels.js";
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
        let modelist = SampleList( number)
        console.log("la wea ",modelist)
        models.push(modelist)
    }else if(text.includes('adios' || text.includes('chao'))){
        //DESPEDIR
        let model = MessageText("xao", number)
        models.push(model)
    }else if(text.includes('comprar')){
        //comprar
        let model = MessageButton( number)
        models.push(model)
       
    }else if(text.includes('vender')){
        //VENDER
        let model = MessageText("registrazaun ", number)
        models.push(model)

    }else{

        let model = MessageText("no entiendo nada", number)
        models.push(model)
    }

    models.forEach((model, i) => {
        SendMessageWhatsApp(model)
        console.log(`modelo ${i} ${model}` )
    });

}
