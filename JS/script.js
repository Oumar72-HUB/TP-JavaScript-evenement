const zone = document.getElementById("zone");

// Gestionnaire d'événement 1 : Double Clic
function doubleClic() {
  zone.innerText = "Développement Web Fullstack!";
  // Opacité à 0 avec un effet de disparition, puis réapparition avec un rebond
  gsap.to("#zone", {
    opacity: 0,
    duration: 2,
    onComplete: () => {
      gsap.to("#zone", {
        opacity: 1,
        y: -100,
        ease: "bounce.out",
        duration: 2,
      });
    },
  });
}
document.getElementById("zone").addEventListener("dblclick", doubleClic);

// Gestionnaire d'événement 2 : Mouseover (survol de la souris)
function over() {
  zone.style.backgroundColor = "orange";
  // Rotation de 360° avec un effet de rebond après l'animation
  gsap.to("#zone", {
    rotation: 360,
    duration: 3,
    onComplete: () => {
      gsap.to("#zone", { y: -20, ease: "bounce.out", duration: 1 });
    },
  });
}
document.getElementById("zone").addEventListener("mouseover", over);

// Gestionnaire d'événement 3 : Clic simple
function simpleClic() {
  zone.style.borderRadius = "50%";
  // Déplacement vers la droite avec un changement de couleur et un effet de secousse
  gsap.to("#zone", {
    x: 500,
    backgroundColor: "red",
    duration: 3,
    onComplete: () => {
      gsap.to("#zone", { x: "+=10", yoyo: true, repeat: 5, duration: 0.1 });
    },
  });
}
document.getElementById("zone").addEventListener("click", simpleClic);

// Gestionnaire d'événement 4 : Mouseout (quand la souris quitte la zone)
function out() {
  zone.style.backgroundColor = "green";
  // Rendre la zone draggable avec inertie
  Draggable.create("#zone", {
    type: "x,y",
    inertia: true,
  });
  // Effet de pulsation après avoir rendu la zone draggable
  gsap.to("#zone", { scale: 1.1, yoyo: true, repeat: -1, duration: 0.5 });
}
document.getElementById("zone").addEventListener("mouseout", out);

// Gestionnaire d'événement 5 : Keydown (appui sur une touche du clavier)
function bordure(event) {
  zone.style.border = "5px solid black";
  // Agrandissement avec un déplacement aléatoire sur l'axe X
  gsap.to("#zone", { scale: 1.2, duration: 2, x: Math.random() * 200 - 100 });
}
document.addEventListener("keydown", bordure);
