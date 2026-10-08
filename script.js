//FUNCTION FOR DROPDOWN BUTTON!
function setupDropdown(header, content, arrow) {

    if (!header || !content || !arrow) return;
    
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

//DROPDOWN FUNCTION FOR ARRAYS!
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
setupDropdown(
    document.getElementById("medium-header"),
    document.getElementById("medium-content"),
    document.getElementById("medium-arrow")
);

setupDropdown(
    document.getElementById("hard-header"),
    document.getElementById("hard-content"),
    document.getElementById("hard-arrow")
);

//DROPDOWN FUNCTION FOR BINARY SEARCH!
setupDropdown(
    document.getElementById("binary-search-header"),
    document.getElementById("binary-search-content"),
    document.getElementById("binary-search-arrow")
);

setupDropdown(
    document.getElementById("binary-search-easy-header"),
    document.getElementById("binary-search-easy-content"),
    document.getElementById("binary-search-easy-arrow")
);

setupDropdown(
    document.getElementById("binary-search-medium-header"),
    document.getElementById("binary-search-medium-content"),
    document.getElementById("binary-search-medium-arrow")
);

setupDropdown(
    document.getElementById("binary-search-hard-header"),
    document.getElementById("binary-search-hard-content"),
    document.getElementById("binary-search-hard-arrow")
);

// DROPDOWN FOR STRINGS:
setupDropdown(
    document.getElementById("strings-header"),
    document.getElementById("strings-content"),
    document.getElementById("strings-arrow")
);

setupDropdown(
    document.getElementById("strings-easy-header"),
    document.getElementById("strings-easy-content"),
    document.getElementById("strings-easy-arrow")
);

setupDropdown(
    document.getElementById("strings-medium-header"),
    document.getElementById("strings-medium-content"),
    document.getElementById("strings-medium-arrow")
);

setupDropdown(
    document.getElementById("strings-hard-header"),
    document.getElementById("strings-hard-content"),
    document.getElementById("strings-hard-arrow")
);

//DROPDOWN FOR LINKEDLISTS:
setupDropdown(
    document.getElementById("linked-list-header"),
    document.getElementById("linked-list-content"),
    document.getElementById("linked-list-arrow")
);

setupDropdown(
    document.getElementById("linked-list-easy-header"),
    document.getElementById("linked-list-easy-content"),
    document.getElementById("linked-list-easy-arrow")
);

setupDropdown(
    document.getElementById("linked-list-medium-header"),
    document.getElementById("linked-list-medium-content"),
    document.getElementById("linked-list-medium-arrow")
);

setupDropdown(
    document.getElementById("linked-list-hard-header"),
    document.getElementById("linked-list-hard-content"),
    document.getElementById("linked-list-hard-arrow")
);

//DROPDOWN FOR STACKS AND QUEUES :)
setupDropdown(
    document.getElementById("stack-queue-header"),
    document.getElementById("stack-queue-content"),
    document.getElementById("stack-queue-arrow")
);

setupDropdown(
    document.getElementById("stack-queue-easy-header"),
    document.getElementById("stack-queue-easy-content"),
    document.getElementById("stack-queue-easy-arrow")
);

setupDropdown(
    document.getElementById("stack-queue-medium-header"),
    document.getElementById("stack-queue-medium-content"),
    document.getElementById("stack-queue-medium-arrow")
);

setupDropdown(
    document.getElementById("stack-queue-hard-header"),
    document.getElementById("stack-queue-hard-content"),
    document.getElementById("stack-queue-hard-arrow")
);


//PROBLEMS STORING IN AN OBJECT!
const problems = {
    arrays: {
        easy: [
            "Two Sum",
            "Move Zeroes",
            "Single Number",
            "Remove Duplicates from Sorted Array",
            "Best Time to Buy and Sell Stock"
        ],

        medium: [
            "Majority Element II",
            "Maximum Subarray",
            "Sort Colors"
        ],

        hard: [
            "Trapping Rain Water",
            "Merge Intervals"
        ]
    },

    binarySearch: {

        easy: [
            "Binary Search",
            "Lower Bound",
            "Upper Bound"
        ],

        medium: [
            "Search in Rotated Sorted Array",
            "Find Minimum in Rotated Sorted Array"
        ],

        hard: [
            "Median of Two Sorted Arrays"
        ]

    },

    strings: {

        easy: [
            "Reverse String",
            "Valid Palindrome",
            "Valid Anagram"
        ],

        medium: [
            "Longest Substring Without Repeating Characters",
            "Group Anagrams"
        ],

        hard: [
            "Minimum Window Substring"
        ]

    },

    linkedList: {

        easy: [
            "Reverse Linked List",
            "Middle of the Linked List",
            "Remove Duplicates from Sorted List"
        ],

        medium: [
            "Add Two Numbers",
            "Linked List Cycle II"
        ],

        hard: [
            "Merge k Sorted Lists"
        ]

    },

    stackQueue: {

        easy: [
            "Implement Stack using Arrays",
            "Implement Queue using Arrays",
            "Valid Parentheses"
        ],

        medium: [
            "Next Greater Element",
            "Min Stack"
        ],

        hard: [
            "Largest Rectangle in Histogram"
        ]

    }
};

//KEEPING ALL THE ARRAY PROBLEMS AT ONE PLACE TO CALCULATE THE PROGRESS WITH JS!
const allArrayProblems = [
    ...problems.arrays.easy,
    ...problems.arrays.medium,
    ...problems.arrays.hard
];

function updateArraysProgress() {
    updateProgress(
        allArrayProblems,
        document.getElementById("arrays-progress"),
        document.getElementById("arrays-progress-fill")
    );
}


//ALL BS PROBLEMS AT ONE PLACE FOR PROGRESS BAR!
const allBinarySearchProblems = [
    ...problems.binarySearch.easy,
    ...problems.binarySearch.medium,
    ...problems.binarySearch.hard
];

function updateBinarySearchProgress() {
    updateProgress(
        allBinarySearchProblems,
        document.getElementById("binary-search-progress"),
        document.getElementById("binary-search-progress-fill")
    );
}

//ALL STRINGS PROBLEMS FOR CALCULATING THE PROGRESS FOR PROGRESS BAR!
const allStringsProblems = [
    ...problems.strings.easy,
    ...problems.strings.medium,
    ...problems.strings.hard
];

function updateStringsProgress() {
    updateProgress(
        allStringsProblems,
        document.getElementById("strings-progress"),
        document.getElementById("strings-progress-fill")
    );
}

// ALL LINKEDLISTS PROBLEMS FOR PROGRESS BAR IN ONE ARRAY!
const allLinkedListProblems = [
    ...problems.linkedList.easy,
    ...problems.linkedList.medium,
    ...problems.linkedList.hard
];

function updateLinkedListProgress() {
    updateProgress(
        allLinkedListProblems,
        document.getElementById("linked-list-progress"),
        document.getElementById("linked-list-progress-fill")
    );
}

// ALL STACKS-QUEUES PROBLEMS IN ONE PLACE FOR PROGRESS-BAR!
const allStackQueueProblems = [
    ...problems.stackQueue.easy,
    ...problems.stackQueue.medium,
    ...problems.stackQueue.hard
];

function updateStackQueueProgress() {
    updateProgress(
        allStackQueueProblems,
        document.getElementById("stack-queue-progress"),
        document.getElementById("stack-queue-progress-fill")
    );
}

// ALL PROBLEMS FOR THE PROGRESS BAR ON DASHBOARD!
let allProblems = [];

//storing the checkboxes in local storage using solvedproblems variable!
let solvedProblems = JSON.parse(localStorage.getItem("solvedProblems")) || {};

function updateOverallProgress() {

    const overallProgressFill =
        document.getElementById("overall-progress-fill");

    if (!overallProgressFill) return;

    let completed = 0;

    allProblems.forEach(function (problem) {

        if (solvedProblems[problem]) {
            completed++;
        }

    });

    const total = allProblems.length;

    const percentage = (completed / total) * 100;

    overallProgressFill.style.width =
        `${percentage}%`;

}


//SAVING ALL THE SOLVED PROBLEMS MARKED AS TRUE IN LOCALSTORAGE FOR DASHBOARD! 
function updateSolvedProblems() {

    const solvedProblemsElement =
        document.getElementById("solved-problems");

    if (!solvedProblemsElement) return;

    let solved = 0;

    allProblems.forEach(function (problem) {

        if (solvedProblems[problem]) {
            solved++;
        }

    });

    solvedProblemsElement.textContent = solved;
}


//CREATING A FUNCTION FOR PROGRESS BAR ON PROBLEM TOPICS: ARRAYS,BS,ETC!
function updateProgress(problemList, progressElement, progressFill) {

    if (!progressElement || !progressFill) return;

    let completed = 0;

    problemList.forEach(function (problem) {

        if (solvedProblems[problem]) {
            completed++;
        }

    });


    const total = problemList.length;

    const percentage = (completed / total) * 100;

    progressFill.style.width = `${percentage}%`;

    progressElement.textContent = `${completed} / ${total} completed`;

}

// creating the questions generating function 
function createProblems(problemList, container, updateTopicProgress) {


      if (!container) return;

    problemList.forEach(function (problem) {

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

            localStorage.setItem(
                "solvedProblems",
                JSON.stringify(solvedProblems)
            );
//CALLING THE UPDATE FUNCTION TO UPDATE THE PROGRESS BAR!
            updateTopicProgress();
            updateOverallProgress();

        });

        problemItem.appendChild(checkbox);
        container.appendChild(problemItem);

    });
}

// GENERATING PROBLEMS FOR ARRAY'S
createProblems(
    problems.arrays.easy,
    document.getElementById("easy-content"),
    updateArraysProgress
);

createProblems(
    problems.arrays.medium,
    document.getElementById("medium-content"),
    updateArraysProgress
);

createProblems(
    problems.arrays.hard,
    document.getElementById("hard-content"),
    updateArraysProgress
);

//GENERATING PROBLEMS FOR BINARY SEARCH!
createProblems(
    problems.binarySearch.easy,
    document.getElementById("binary-search-easy-content"),
    updateBinarySearchProgress
);

createProblems(
    problems.binarySearch.medium,
    document.getElementById("binary-search-medium-content"),
    updateBinarySearchProgress
);

createProblems(
    problems.binarySearch.hard,
    document.getElementById("binary-search-hard-content"),
    updateBinarySearchProgress
);

//GENERATING PROBLEMS FOR STRINGS:
createProblems(
    problems.strings.easy,
    document.getElementById("strings-easy-content"),
    updateStringsProgress
);

createProblems(
    problems.strings.medium,
    document.getElementById("strings-medium-content"),
    updateStringsProgress
);

createProblems(
    problems.strings.hard,
    document.getElementById("strings-hard-content"),
    updateStringsProgress
);

//GENERATING PROBLEMS FOR LINKEDLISTS:
createProblems(
    problems.linkedList.easy,
    document.getElementById("linked-list-easy-content"),
    updateLinkedListProgress
);

createProblems(
    problems.linkedList.medium,
    document.getElementById("linked-list-medium-content"),
    updateLinkedListProgress
);

createProblems(
    problems.linkedList.hard,
    document.getElementById("linked-list-hard-content"),
    updateLinkedListProgress
);

//GENERATING PROBLEMS FOR STACKS AND QUEUES :)
createProblems(
    problems.stackQueue.easy,
    document.getElementById("stack-queue-easy-content"),
    updateStackQueueProgress
);

createProblems(
    problems.stackQueue.medium,
    document.getElementById("stack-queue-medium-content"),
    updateStackQueueProgress
);

createProblems(
    problems.stackQueue.hard,
    document.getElementById("stack-queue-hard-content"),
    updateStackQueueProgress
);

//CALLING THE FUNCTION TO GENERATE THE PROGRESS BAR!
updateArraysProgress();
updateBinarySearchProgress();
updateStringsProgress();
updateLinkedListProgress();
updateStackQueueProgress();
updateOverallProgress();
updateSolvedProblems();


//SHOWING TOTAL PROBLEMS ON DASHBOARD!
const totalProblemsElement =
    document.getElementById("total-problems");

if (totalProblemsElement) {
    totalProblemsElement.textContent = allProblems.length;
}
//--------------------------------------------------------------------.....--------------////
// ===============================
// ===============================
// STRIVER A2Z SHEET
// ===============================

const striverTopicsContainer =
    document.getElementById("striver-topics");


fetch("data/striver.json")
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {

        // ===============================
        // BUILD ALL STRIVER PROBLEMS
        // ===============================

        allProblems = [];

        data.topics.forEach(function(topic) {

            allProblems.push(...(topic.easy || []));
            allProblems.push(...(topic.medium || []));
            allProblems.push(...(topic.hard || []));

        });


        // ===============================
        // UPDATE DASHBOARD TOTAL
        // ===============================

        const totalProblemsElement =
            document.getElementById("total-problems");

        if (totalProblemsElement) {

            totalProblemsElement.textContent =
                allProblems.length;

        }


        // ===============================
        // UPDATE DASHBOARD SOLVED
        // ===============================

        updateSolvedProblems();
        updateOverallProgress();


        // ===============================
        // CREATE STRIVER PAGE
        // ONLY IF STRIVER PAGE EXISTS
        // ===============================

        if (striverTopicsContainer) {

            data.topics.forEach(function(topic) {

                // -------------------------------
                // TOPIC CONTAINER
                // -------------------------------

                const topicDropdown =
                    document.createElement("div");

                topicDropdown.classList.add(
                    "topic-dropdown"
                );


                // -------------------------------
                // TOPIC HEADER
                // -------------------------------

                const topicHeader =
                    document.createElement("div");

                topicHeader.classList.add(
                    "topic-header"
                );


                // -------------------------------
                // TOPIC INFO
                // -------------------------------

                const topicInfo =
                    document.createElement("div");

                topicInfo.classList.add(
                    "topic-info"
                );


                // -------------------------------
                // TOPIC NAME
                // -------------------------------

                const topicName =
                    document.createElement("h3");

                topicName.textContent =
                    topic.name;


                // -------------------------------
                // TOPIC PROGRESS
                // -------------------------------

                const topicProgress =
                    document.createElement("div");

                topicProgress.classList.add(
                    "topic-progress"
                );


                const progressText =
                    document.createElement("span");


                const progressBar =
                    document.createElement("div");

                progressBar.classList.add(
                    "progress-bar"
                );


                const progressFill =
                    document.createElement("div");

                progressFill.classList.add(
                    "progress-fill"
                );


                progressBar.appendChild(
                    progressFill
                );

                topicProgress.appendChild(
                    progressText
                );

                topicProgress.appendChild(
                    progressBar
                );


                topicInfo.appendChild(
                    topicName
                );

                topicInfo.appendChild(
                    topicProgress
                );


                // -------------------------------
                // TOPIC ARROW
                // -------------------------------

                const topicArrow =
                    document.createElement("span");

                topicArrow.textContent = "▼";


                topicHeader.appendChild(
                    topicInfo
                );

                topicHeader.appendChild(
                    topicArrow
                );


                // -------------------------------
                // DIFFICULTY CONTAINER
                // -------------------------------

                const difficultySection =
                    document.createElement("div");

                difficultySection.classList.add(
                    "difficulty-section"
                );

                difficultySection.style.display =
                    "none";


                // -------------------------------
                // CREATE DIFFICULTY
                // -------------------------------

                function createDifficulty(
                    difficultyName,
                    problemList
                ) {

                    const difficultyHeader =
                        document.createElement("div");

                    difficultyHeader.classList.add(
                        "difficulty-header"
                    );


                    const difficultyTitle =
                        document.createElement("h3");

                    difficultyTitle.textContent =
                        difficultyName;


                    const difficultyArrow =
                        document.createElement("span");

                    difficultyArrow.textContent =
                        "▼";


                    difficultyHeader.appendChild(
                        difficultyTitle
                    );

                    difficultyHeader.appendChild(
                        difficultyArrow
                    );


                    // -------------------------------
                    // PROBLEMS LIST
                    // -------------------------------

                    const problemsList =
                        document.createElement("div");

                    problemsList.classList.add(
                        "problems-list"
                    );

                    problemsList.style.display =
                        "none";


                    // -------------------------------
                    // CREATE EACH PROBLEM
                    // -------------------------------

                    problemList.forEach(function(problem) {

                        const problemItem =
                            document.createElement("div");

                        problemItem.classList.add(
                            "problem-item"
                        );


                        const problemName =
                            document.createElement("span");

                        problemName.textContent =
                            problem;


                        const checkbox =
                            document.createElement("input");

                        checkbox.type = "checkbox";


                        // LOAD SAVED PROGRESS

                        checkbox.checked =
                            solvedProblems[problem] || false;


                        // CHECKBOX EVENT

                        checkbox.addEventListener(
                            "change",
                            function() {

                                solvedProblems[problem] =
                                    checkbox.checked;


                                localStorage.setItem(
                                    "solvedProblems",
                                    JSON.stringify(
                                        solvedProblems
                                    )
                                );


                                updateTopicProgress();

                                updateOverallProgress();

                                updateSolvedProblems();

                            }
                        );


                        problemItem.appendChild(
                            problemName
                        );

                        problemItem.appendChild(
                            checkbox
                        );

                        problemsList.appendChild(
                            problemItem
                        );

                    });


                    // -------------------------------
                    // DIFFICULTY DROPDOWN
                    // -------------------------------

                    difficultyHeader.addEventListener(
                        "click",
                        function() {

                            if (
                                problemsList.style.display ===
                                "none"
                            ) {

                                problemsList.style.display =
                                    "block";

                                difficultyArrow.textContent =
                                    "▶";

                            } else {

                                problemsList.style.display =
                                    "none";

                                difficultyArrow.textContent =
                                    "▼";

                            }

                        }
                    );


                    difficultySection.appendChild(
                        difficultyHeader
                    );

                    difficultySection.appendChild(
                        problemsList
                    );

                }


                // -------------------------------
                // ADD EASY / MEDIUM / HARD
                // -------------------------------

                createDifficulty(
                    "Easy",
                    topic.easy || []
                );

                createDifficulty(
                    "Medium",
                    topic.medium || []
                );

                createDifficulty(
                    "Hard",
                    topic.hard || []
                );


                // -------------------------------
                // TOPIC DROPDOWN
                // -------------------------------

                topicHeader.addEventListener(
                    "click",
                    function() {

                        if (
                            difficultySection.style.display ===
                            "none"
                        ) {

                            difficultySection.style.display =
                                "block";

                            topicArrow.textContent =
                                "▶";

                        } else {

                            difficultySection.style.display =
                                "none";

                            topicArrow.textContent =
                                "▼";

                        }

                    }
                );


                // -------------------------------
                // TOPIC PROGRESS
                // -------------------------------

                function updateTopicProgress() {

                    let completed = 0;

                    let total = 0;


                    ["easy", "medium", "hard"].forEach(
                        function(difficulty) {

                            const problems =
                                topic[difficulty] || [];

                            total += problems.length;


                            problems.forEach(
                                function(problem) {

                                    if (
                                        solvedProblems[problem]
                                    ) {

                                        completed++;

                                    }

                                }
                            );

                        }
                    );


                    progressText.textContent =
                        `${completed} / ${total} completed`;


                    const percentage =
                        total === 0
                            ? 0
                            : (completed / total) * 100;


                    progressFill.style.width =
                        `${percentage}%`;

                }


                // -------------------------------
                // PUT EVERYTHING ON PAGE
                // -------------------------------

                topicDropdown.appendChild(
                    topicHeader
                );

                topicDropdown.appendChild(
                    difficultySection
                );

                striverTopicsContainer.appendChild(
                    topicDropdown
                );


                // -------------------------------
                // INITIAL PROGRESS
                // -------------------------------

                updateTopicProgress();

            });

        }

    })

    .catch(function(error) {

        console.error(
            "Error loading Striver data:",
            error
        );

    });