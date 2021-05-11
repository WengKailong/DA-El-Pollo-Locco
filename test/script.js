IMAGES_WALKING = [
  "../img/4.Secuencias_Enemy_gigant-Do_Gallinota-/1.Caminata/G1.png",
  "../img/4.Secuencias_Enemy_gigant-Do_Gallinota-/1.Caminata/G2.png",
  "../img/4.Secuencias_Enemy_gigant-Do_Gallinota-/1.Caminata/G3.png",
  "../img/4.Secuencias_Enemy_gigant-Do_Gallinota-/1.Caminata/G4.png",
];

let count = 0;

function init() {
  const element = document.getElementById("test");

  element.innerHTML = "";

  var testinterval = setInterval(() => {
    playAnimaton(IMAGES_WALKING);
  }, 500);
}

function playAnimaton(ANIMATION_IMAGES) {
  const img = document.getElementById("testimg");
  const element = document.getElementById("test");
  let mod = count % ANIMATION_IMAGES.length;
  element.innerHTML = mod;

  img.src = ANIMATION_IMAGES[mod];
  count++;
}
