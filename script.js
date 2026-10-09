
 // ALL STRIVER PROBLEMS
let allProblems = [];

// LOAD SAVED CHECKBOX DATA FROM LOCAL STORAGE
let solvedProblems =
    JSON.parse(localStorage.getItem("solvedProblems")) || {};


// UPDATE DASHBOARD OVERALL PROGRESS BAR
function updateOverallProgress() {

    const overallProgressFill =
        document.getElementById("overall-progress-fill");

    if (!overallProgressFill) return;

    let completed = 0;

    allProblems.forEach(function(problem) {

        if (solvedProblems[problem]) {
            completed++;
        }

    });

    const total = allProblems.length;

    const percentage =
        total === 0 ? 0 : (completed / total) * 100;

    overallProgressFill.style.width = `${percentage}%`;

}


// UPDATE DASHBOARD SOLVED PROBLEMS COUNT
function updateSolvedProblems() {

    const solvedProblemsElement =
        document.getElementById("solved-problems");

    if (!solvedProblemsElement) return;

    let solved = 0;

    allProblems.forEach(function(problem) {

        if (solvedProblems[problem]) {
            solved++;
        }

    });

    solvedProblemsElement.textContent = solved;

}


// STRIVER A2Z SHEET
const striverTopicsContainer =
    document.getElementById("striver-topics");


fetch("data/striver.json")

    .then(function(response) {
        return response.json();
    })

    .then(function(data) {

        // COLLECT ALL PROBLEMS FOR DASHBOARD COUNTS
        allProblems = [];

        data.topics.forEach(function(topic) {

            allProblems.push(...(topic.easy || []));
            allProblems.push(...(topic.medium || []));
            allProblems.push(...(topic.hard || []));

        });


        // UPDATE DASHBOARD TOTAL
        const totalProblemsElement =
            document.getElementById("total-problems");

        if (totalProblemsElement) {
            totalProblemsElement.textContent =
                allProblems.length;
        }


        // UPDATE DASHBOARD PROGRESS
        updateSolvedProblems();
        updateOverallProgress();


        // CREATE TOPICS ONLY ON THE STRIVER PAGE
        if (striverTopicsContainer) {

            data.topics.forEach(function(topic) {

                // TOPIC CONTAINER
                const topicDropdown =
                    document.createElement("div");

                topicDropdown.classList.add("topic-dropdown");


                // TOPIC HEADER
                const topicHeader =
                    document.createElement("div");

                topicHeader.classList.add("topic-header");


                // TOPIC INFORMATION
                const topicInfo =
                    document.createElement("div");

                topicInfo.classList.add("topic-info");


                // TOPIC NAME
                const topicName =
                    document.createElement("h3");

                topicName.textContent = topic.name;


                // TOPIC PROGRESS
                const topicProgress =
                    document.createElement("div");

                topicProgress.classList.add("topic-progress");

                const progressText =
                    document.createElement("span");

                const progressBar =
                    document.createElement("div");

                progressBar.classList.add("progress-bar");

                const progressFill =
                    document.createElement("div");

                progressFill.classList.add("progress-fill");

                progressBar.appendChild(progressFill);
                topicProgress.appendChild(progressText);
                topicProgress.appendChild(progressBar);

                topicInfo.appendChild(topicName);
                topicInfo.appendChild(topicProgress);


                // TOPIC ARROW
                const topicArrow =
                    document.createElement("span");

                topicArrow.textContent = "▼";

                topicHeader.appendChild(topicInfo);
                topicHeader.appendChild(topicArrow);


                // DIFFICULTY SECTION
                const difficultySection =
                    document.createElement("div");

                difficultySection.classList.add("difficulty-section");
                difficultySection.style.display = "none";


                // CREATE EASY, MEDIUM, AND HARD SECTIONS
                function createDifficulty(difficultyName, problemList) {

                    const difficultyHeader =
                        document.createElement("div");

                    difficultyHeader.classList.add("difficulty-header");


                    const difficultyTitle =
                        document.createElement("h3");

                    difficultyTitle.textContent = difficultyName;


                    const difficultyArrow =
                        document.createElement("span");

                    difficultyArrow.textContent = "▼";

                    difficultyHeader.appendChild(difficultyTitle);
                    difficultyHeader.appendChild(difficultyArrow);


                    // PROBLEMS LIST
                    const problemsList =
                        document.createElement("div");

                    problemsList.classList.add("problems-list");
                    problemsList.style.display = "none";


                    // CREATE EACH PROBLEM AND ITS CHECKBOX
                    problemList.forEach(function(problem) {

                        const problemItem =
                            document.createElement("div");

                        problemItem.classList.add("problem-item");


                        const problemName =
                            document.createElement("span");

                        problemName.textContent = problem;


                        const checkbox =
                            document.createElement("input");

                        checkbox.type = "checkbox";

                        // RESTORE SAVED CHECKBOX STATE
                        checkbox.checked =
                            solvedProblems[problem] || false;


                        // SAVE CHANGES WHEN CHECKBOX IS CLICKED
                        checkbox.addEventListener("change", function() {

                            solvedProblems[problem] =
                                checkbox.checked;

                            localStorage.setItem(
                                "solvedProblems",
                                JSON.stringify(solvedProblems)
                            );

                            updateTopicProgress();
                            updateOverallProgress();
                            updateSolvedProblems();

                        });


                        problemItem.appendChild(problemName);
                        problemItem.appendChild(checkbox);
                        problemsList.appendChild(problemItem);

                    });


                    // OPEN OR CLOSE DIFFICULTY SECTION
                    difficultyHeader.addEventListener("click", function() {

                        if (problemsList.style.display === "none") {

                            problemsList.style.display = "block";
                            difficultyArrow.textContent = "▶";

                        } else {

                            problemsList.style.display = "none";
                            difficultyArrow.textContent = "▼";

                        }

                    });


                    difficultySection.appendChild(difficultyHeader);
                    difficultySection.appendChild(problemsList);

                }


                // ADD THE THREE DIFFICULTY LEVELS
                createDifficulty("Easy", topic.easy || []);
                createDifficulty("Medium", topic.medium || []);
                createDifficulty("Hard", topic.hard || []);


                // OPEN OR CLOSE TOPIC
                topicHeader.addEventListener("click", function() {

                    if (difficultySection.style.display === "none") {

                        difficultySection.style.display = "block";
                        topicArrow.textContent = "▶";

                    } else {

                        difficultySection.style.display = "none";
                        topicArrow.textContent = "▼";

                    }

                });


                // CALCULATE TOPIC PROGRESS
                function updateTopicProgress() {

                    let completed = 0;
                    let total = 0;

                    ["easy", "medium", "hard"].forEach(function(difficulty) {

                        const problems = topic[difficulty] || [];

                        total += problems.length;

                        problems.forEach(function(problem) {

                            if (solvedProblems[problem]) {
                                completed++;
                            }

                        });

                    });

                    progressText.textContent =
                        `${completed} / ${total} completed`;

                    const percentage =
                        total === 0 ? 0 : (completed / total) * 100;

                    progressFill.style.width = `${percentage}%`;

                }


                // ADD THE TOPIC TO THE PAGE
                topicDropdown.appendChild(topicHeader);
                topicDropdown.appendChild(difficultySection);

                striverTopicsContainer.appendChild(topicDropdown);


                // SHOW INITIAL TOPIC PROGRESS
                updateTopicProgress();

            });

        }

    })

    .catch(function(error) {

        console.error("Error loading Striver data:", error);

    });