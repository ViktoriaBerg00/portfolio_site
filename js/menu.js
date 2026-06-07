const dropdownBtn = document.querySelector("#dropdown-btn");
const dropdownMenu = document.querySelector("#dropdown-menu");

if (dropdownBtn && dropdownMenu) {
  dropdownBtn.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
  });

  dropdownMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      dropdownMenu.classList.remove("show");
    });
  });
}
