function setupDropdown(header, content, arrow) {

    content.style.display = "none";

    header.addEventListener("click", function () {

        if (content.style.display === "none") {
            content.style.display = "block";
            arrow.textContent = "▼";
        } else {
            content.style.display = "none";
            arrow.textContent = "▶";
        }

    });

}
setupDropdown(
    document.getElementById("arrays-header"),
    document.getElementById("arrays-content"),
    document.getElementById("arrays-arrow")
);

setupDropdown(
    document.getElementById("easy-header"),
    document.getElementById("easy-content"),
    document.getElementById("easy-arrow")
);



