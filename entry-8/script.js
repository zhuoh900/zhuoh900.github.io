const slider = document.getElementById("speedSlider");
const bar = document.getElementById("speedBar");

slider.addEventListener("input", () => {
  bar.style.width = slider.value + "%";
});
