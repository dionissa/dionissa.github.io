var vidaOnix = 20
var vidaCharmeleon = 20
var ataque = 0
  document.getElementById("info");
  document.getElementById("info").innerHTML = "Vida Onix: " + vidaOnix + " ---  Vida Charmeleon: " + vidaCharmeleon;

function atacar() {
  ataque = Math.floor(Math.random() * 6)
  ataqueOnix = Math.floor(Math.random() * 6)
  vidaCharmeleon = vidaCharmeleon - ataqueOnix
  vidaOnix = vidaOnix - ataque
  console.log(vidaOnix, vidaCharmeleon)
  
    if (vidaOnix > 0) {
  document.getElementById("info");
  document.getElementById("info").innerHTML = "Vida Onix: " + vidaOnix + " ---  Vida Charmeleon: " + vidaCharmeleon;
} else if (vidaCharmeleon < 1) {
  document.getElementById("info");
  document.getElementById("info").innerHTML = "Charmeleon desmaiou, você perdeu!! :(";
} else {
  document.getElementById("info");
  document.getElementById("info").innerHTML = "Onix desmaiou, você venceu!! :D";
}

}

function defender() {
  ataqueOnix = Math.floor(Math.random() * 5)
  vidaCharmeleon = vidaCharmeleon + 2 - ataqueOnix
  console.log(vidaOnix, vidaCharmeleon)
  
      if (vidaOnix > 0) {
  document.getElementById("info");
  document.getElementById("info").innerHTML = "Vida Onix: " + vidaOnix + " ---  Vida Charmeleon: " + vidaCharmeleon;
} else if (vidaCharmeleon < 1) {
  document.getElementById("info");
  document.getElementById("info").innerHTML = "Charmeleon desmaiou, você perdeu!! :(";
} else {
  document.getElementById("info");
  document.getElementById("info").innerHTML = "Onix desmaiou, você venceu!! :D";
}
}