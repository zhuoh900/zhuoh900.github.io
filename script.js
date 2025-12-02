const rpmNumber = document.getElementById("rpm-number");
const rpmBar = document.getElementById("rpm-bar-fill");

function rpmPercent(rpm) {
  return Math.min(100, (rpm / 8000) * 100);
}

document.querySelectorAll("#entry-row a").forEach(entry => {
  const rpm = parseInt(entry.dataset.rpm);

  entry.addEventListener("mouseenter", () => {
    rpmNumber.textContent = `${rpm} RPM`;
    rpmBar.style.width = rpmPercent(rpm) + "%";
  });

  entry.addEventListener("mouseleave", () => {
    rpmNumber.textContent = "0 RPM";
    rpmBar.style.width = "0%";
  });
});
