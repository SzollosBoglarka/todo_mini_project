// COUNTER

const new_status = document.getElementById("new_status_counter");
const in_progress_status = document.getElementById("in_progress_status_counter");
const done_status = document.getElementById("done_status_counter");

const status_counter = (tasks) => {
    let news = 0;
    let in_progresses = 0;
    let dones = 0;

    tasks.forEach((task) => {
        if (task.status === "Új") {
            news += 1;
        } else if (task.status === "Folyamatban") {
            in_progresses += 1;
        } else {
            dones += 1;
        }
    })
    set_status_count({news, in_progresses, dones});
};

const set_status_count = (status) => {
    new_status.innerText = status.news;
    in_progress_status.innerText = status.in_progresses;
    done_status.innerText = status.dones;
};

// COLORING TASK_PRIORITY SELECT ITEM BACKGROUND

let priority = document.getElementById("task_priority");
let modalBackground = document.getElementById("modal-content");

const coloringBackground = () => {
    if (priority.value === "Magas") {
        modalBackground.style.backgroundColor = "#bd7880";
    } else if (priority.value === "Közepes") {
        modalBackground.style.backgroundColor = "#A09E57";
    } else if (priority.value === "Alacsony") {
        modalBackground.style.backgroundColor = "#f3d8ce";
    } else {
        modalBackground.style.backgroundColor = "#d1c791";
    }
};

const setColorToDefault = () => {
    modalBackground.style.backgroundColor = "#d1c791";
};

// USER NICKNAME IN THE WELCOME TEXT

const userWelcome = (document.getElementById("user-nickname").innerHTML = localStorage.getItem("currentUser"));

// LOGOUT

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
});