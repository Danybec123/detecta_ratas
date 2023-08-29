var lista = []
var detecor = false
var encontrado=false
var nuclear=0
function setup() {
   canvas = createCanvas(640, 480)
   background("red")
   cocos = ml5.objectDetector("cocossd", cargado)
   
   VIDEO = createCapture(VIDEO)
   VIDEO.hide()
}

function draw() {
   image(VIDEO, 0, 0, 640, 480)
   if (detecor) {
      VIDEO.size(640, 480)
      cocos.detect(canvas, Respondido)
      encontrado=false
      for (let ovjetos = 0; ovjetos < lista.length; ovjetos++) {
         
         
         noFill()
         stroke("black")
         
         rect(lista[ovjetos].x, lista[ovjetos].y, lista[ovjetos].width, lista[ovjetos].height)
         fill("yellow")
         
         textSize(30)
         strokeWeight(1)
         mensaje = lista[ovjetos].label + Math.round(lista[ovjetos].confidence * 100) + "%"
         text(mensaje, lista[ovjetos].x, lista[ovjetos].y,)
         if(lista[ovjetos].label=="person"){
            encontrado=true
         }
      }
      if(encontrado==true){
       if(!nuclear.isPlaying()){
         nuclear.play()
       }
      }
      else{nuclear.stop()}
      document.getElementById("h2O").innerHTML = lista.length
   }
}
function cargado() {
   console.log("cargado")
   detecor = true
}
function Respondido(error, resultados) {
   if (!error) {
      console.log(resultados)
      lista = resultados
   }

}
function preload(){
   nuclear=loadSound("nuclear_alarm.mp3")
}
