function dropdownToggle(){
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown) return;

    const toggle = dropdown.querySelector(".dropdown-toggle");

    document.addEventListener("click", function (e) {
    if (toggle.contains(e.target)) {
        e.preventDefault();
        dropdown.classList.toggle("open");
        return;
    }
    if (!dropdown.contains(e.taget)) {
        dropdown.classList.remove("open");
    }
  });
};

function buttonClick() {
    document.querySelector(".next-button").style.opacity = "0.1";
};