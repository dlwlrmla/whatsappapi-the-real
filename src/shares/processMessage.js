import { MessageButton, MessageText, SampleList } from "./whatsappModels.js";
import { SendMessageWhatsApp } from "../services/whatsappService.js";

export const Process1= (text, number) => {
    text = text.toLowerCase()
    console.log(text)
    if(text.includes("hola")){
        let model = MessageText("hola que tal", number)
        console.log(model)
        SendMessageWhatsApp(model)
    }
}
export const Process = async(text, number) => {
    text = text.toLowerCase()
    let models = []
    let modelsTrack = []
    try {
    if(text.includes('hola')){
        //SALUDAR
        let model = MessageText("hola, un gusto saludarte ingresa tu nombre porfa", number)
        models.push(model)
        modelsTrack.push(1)

    }else if(text.includes('lista')){
        //AGRADECER
/*         let model = MessageText("gracias a ti", number)
        models.push(model) */
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
        
    } catch (error) {
        console.error(error)
    }

    models.forEach((model, i) => {
        SendMessageWhatsApp(model)  
        console.log(`modelo ${i} ${model}` )
    });

}
