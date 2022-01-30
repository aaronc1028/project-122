var x, y;
var drawCircle = "";
var drawRectangle = "";
var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function setup() {
    canvas = createCanvas(900, 600)
}

function draw() {
if(drawCircle=="set"){
   var r=Math.floor(Math.random()*100)
   circle(x,y,r)
   drawCircle=""
   
}
if(drawRectangle=="set"){
    rect(x,y,70,100)
    drawRectangle=""
}
}

function start() {
    document.getElementById("status").innerHTML = "System Is Listening, Please Speak"
    recognition.start()
}
recognition.onresult = function (event) {
    console.log(event)
    var transcript = event.results[0][0].transcript
    console.log(transcript)
    document.getElementById("status").innerHTML = " The speech has been Recognized as - " + transcript
    if (transcript == "Circle") {

        document.getElementById("status").innerHTML = " Started Drawing Circle"
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        drawCircle = "set"
    }
    if (transcript== "rectangle"){
     document.getElementById("status").innerHTML="Started Drawing Rectangle"
     x=Math.floor(Math.random()*900)
     y=Math.floor(Math.random()*600)
     drawRectangle="set"
    }
}
