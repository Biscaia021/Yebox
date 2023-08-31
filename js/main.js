import YeboxEngine from "./Framework/Yebox/Yebox.js";


let YeEngine = new YeboxEngine()
YeEngine.CreateBasicTags()



let Start = setInterval(()=>{
    // Add your methods for Sanddox here
    YeEngine.AlterThemeSystem(YeEngine.Theme.DarkTheme)
    YeEngine.AlterTheme(YeEngine.Theme.GreenTheme)
    YeEngine.ModifyW(YeEngine.GetlementById("card","200vh"))
    YeEngine.ModifyH(YeEngine.GetlementById("card","300h"))
 

    //End Your methods Here
    clearInterval(Start) //Dont erase this line
},400)

let Update = setInterval(() =>{
    if(YeEngine.Questions_save[0] != undefined)

{
YeEngine.ModifyContentClass(document.getElementById("card"),"ola mundo")
clearInterval(Update), YeEngine.Questions_save[0]

}
},600)