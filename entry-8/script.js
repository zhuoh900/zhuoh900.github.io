const slider = document.getElementById("rpmSlider");
const needle = document.getElementById("needle");


slider.addEventListener("input", () => {
  const rpm = slider.value;
  const angle = (rpm / 8000) * 240 - 140;
  needle.style.transform = `rotate(${angle}deg)`;
});
