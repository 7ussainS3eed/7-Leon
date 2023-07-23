let icon = document.querySelector(".icon");
let open = 0;
let ul = document.querySelector("ul");
icon.onclick = function() {
    if (open == 0) {
        open = 1;
        ul.style.display = "block";
    }
    else {
        open = 0;
        ul.style.display = "none";
    }
}

document.onclick = function(e) {
    if (e.target.classList.contains("icon2") == 0) {
        open = 0;
        ul.style.display = "none";
    }
}