function setupDropdown(header, content, arrow) {

    content.style.display = "none";

    header.addEventListener("click", function () {

        if (content.style.display === "none") {
            content.style.display = "block";
            arrow.textContent = "▶";
        } else {
            content.style.display = "none";
            arrow.textContent = "▼";
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

const problems = {
    arrays: {
        easy: [
            "Two Sum",
            "Move Zeroes",
            "Single Number"
        ]
    }
};

const easyProblems = problems.arrays.easy;

//storing the checkboxes in local storage using solvedproblems variable!
let solvedProblems = JSON.parse(localStorage.getItem("solvedProblems")) || {};


const easyContent = document.getElementById("easy-content");



easyProblems.forEach(function (problem) {

    const problemItem = document.createElement("div");

    problemItem.classList.add("problem-item");

    const problemName = document.createElement("span");

    problemName.textContent = problem;

    problemItem.appendChild(problemName);

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked = solvedProblems[problem] || false;

    checkbox.addEventListener("change", function () {
        solvedProblems[problem] = checkbox.checked;
        

        localStorage.setItem("solvedProblems", JSON.stringify(solvedProblems));
    });

    problemItem.appendChild(checkbox);

    easyContent.appendChild(problemItem);

});