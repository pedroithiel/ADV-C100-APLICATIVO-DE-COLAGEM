var Voz = window.webkitSpeechRecognition;

var pessoa = new Voz();

var text = elemento("textbox");

function iniciar() {
    text.innerHTML = " "
    pessoa.start();

}
function falar() {
    var API = window.speechSynthesis;
    var falaText = "tirando sua selfia em 5 segundos";
    var textoFalado = new SpeechSynthesisUtterance(falaText)
    API.speak(textoFalado);

    setTimeout(function(){ 
        photo();
        save()
    },5000);
    
}



pessoa.onresult = function (event) {
    console.log(event)

    var context = event.results[0][0].transcript;
    console.log(context)
    text.innerHTML = context;


    if (text.value == "tire minha selfie") {
        falar()
        
        Webcam.attach(camera);
    }
    
}
camera = elemento("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach('#my_camera');

function photo() {
    Webcam.snap(function(data_uri) {
        elemento("result").innerHTML = "<img id = 'MySelfie' src = '"+data_uri+"'>"
    })
}
function save() {
    link = elemento("link");
    imagem = elemento("MySelfie").scr;
    link.href = imagem;
    link.click()
}

function elemento(nome) {
    return document.getElementById(nome);
}