const path = document.querySelector("#scrollPath");

if (path) {
  const pathLength = path.getTotalLength();

  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = scrollTop / documentHeight;

    path.style.strokeDashoffset = pathLength * (1 - scrollPercent);
  });
}
