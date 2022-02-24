var speechRecognition = window.webkitSpeechRecognition; 

var recognition = new speechRecognition();

function start(){
    document.getElementById("textBox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie"){
        console.log("taking selfie ---");
        speak();  
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function(){});
    Webcam.attach(camera);

    setTimeout(function() {
       rickroll();
    }, 5000);
}

Webcam.set({
    width : 360 , height : 250 , image_format : 'png' , png_quality : 90
});

camera = document.getElementById("camera");

function rickroll(){
        document.getElementById("result").innerHTML = '<center>' + '<video autoplay loop id="rick-roll" class="col-lg-6 col-sm-6">' +
        '<source src="Rick Astley - Never Gonna Give You Up (Official Music Video) - YouTube - Google Chrome 2021-12-30 00-36-58_Trim.mp4" type="video/mp4">' + '</video>' + '</center>';

}
