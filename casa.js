var slide = new Array(
  "./images/fan.png",
  "./images/depositphotos_35603149-stock-photo-running-woman.jpeg",
  "./images/nat.jpeg",
  "./images/tas.jpeg"
);
var numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").src = slide[numero];
}
