document.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".dropdown");
    const toggle = dropdown.querySelector(".dropdown-toggle");
    if (toggle.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle("open");
        return;
    }
    if (dropdown.contains(e.target)) {
        return;
    }
    dropdown.classList.remove("open");
    });