const car = document.getElementById("car");

document.addEventListener("mousemove", (e) => {
  car.style.left = (e.clientX - 40) + "px";
});
