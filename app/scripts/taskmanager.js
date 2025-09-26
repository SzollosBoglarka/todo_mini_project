const data = JSON.parse(localStorage.getItem("data"));

const currentUser = localStorage.getItem("currentUser");
const tasks = data.users.find(user => user.nickname === currentUser).tasks || [];

//DATA LOADING

window.onload = () => {
    const tbody = document.querySelector("#taskManagerTable tbody");
    tasks.forEach(task => {
        tbody.insertAdjacentHTML("beforeend", renderTaskRow(task));
    });
    attachEditEvents();
    attachDeleteEvents();
    status_counter(tasks);
}

const renderTaskRow = (task) => {
    return `
        <tr data-priority="${task.priority}">
            <td class="task_id">${task.id}</td>
            <td class="task_title">${task.title}</td>
            <td class="task_description">${task.description}</td>
            <td class="task_category">${task.category}</td>
            <td class="task_deadline">${task.deadline}</td>
            <td class="task_priority">${task.priority}</td>
            <td class="task_status">${task.status}</td>
            <td>
                <button data-id="${task.id}" data-bs-toggle="modal" data-bs-target="#taskModal" class="btn edit">Szerkesztés</button>
                <button data-id="${task.id}" class="btn delete-btn">Törlés</button>
            </td>
        </tr>
    `;
}

let title = document.getElementById("task_title");
let description = document.getElementById("task_description");
let category = document.getElementById("task_category");
let deadline = document.getElementById("task_deadline");
let priority = document.getElementById("task_priority");
let status = document.getElementById("task_status");

// MODIFY TASK

const saveBtn = document.getElementById("save-btn");

let editingTaskId = null;

const attachEditEvents = () => {
    document.querySelectorAll(".edit").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const taskId = e.target.dataset.id;
            const task = tasks.find(task => task.id === Number(taskId));
            loadTaskIntoModal(task);
        });
    });
}

const loadTaskIntoModal = (task) => {

    const modalHeader = document.getElementById("taskModalLabel");

    editingTaskId = task.id;

    modalHeader.innerText = task.id;
    title.value = task.title;
    description.value = task.description;
    category.value = task.category;
    deadline.value = task.deadline;
    priority.value = task.priority;
    status.value = task.status;
}

if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        const updatedTask = {
            id: editingTaskId,
            title: title.value,
            description: description.value,
            category: category.value,
            deadline: deadline.value,
            priority: priority.value,
            status: status.value
        };

        const index = tasks.findIndex(task => task.id === editingTaskId);
        tasks[index] = updatedTask;

        const user = data.users.find(user => user.nickname === currentUser);
        user.tasks = tasks;
        localStorage.setItem("data", JSON.stringify(data));

        window.location.reload();

        const tbody = document.querySelector("#taskManagerTable tbody");
        tbody.innerHTML = "";
        tasks.forEach(task => {
            tbody.insertAdjacentHTML("beforeend", renderTaskRow(task));
        });

        const modal = document.getElementById("taskModal");
        modal.hidden = true;
    });
}

// ADD TASK

const newTaskBtn = document.getElementById("new-task-btn");

newTaskBtn.addEventListener("click", () => {
    const today = new Date();

    editingTaskId = null;
    document.getElementById("taskModalLabel").innerText = "Új feladat";

    title.value = "";
    description.value = "";
    category.value = "";
    deadline.value = today.toISOString().split("T")[0];
    priority.value = "";
    status.value = "Új";
});

if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        if (editingTaskId === null) {
            const newTask = {
                id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
                title: title.value,
                description: description.value,
                category: category.value,
                deadline: deadline.value,
                priority: priority.value,
                status: status.value
            };
            tasks.push(newTask);
        }

        const user = data.users.find(user => user.nickname === currentUser);
        user.tasks = tasks;
        localStorage.setItem("data", JSON.stringify(data));

        window.location.reload();
    });
}

// DELETE TASK

function attachDeleteEvents() {
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {

            const taskId = Number(e.target.dataset.id);

            Swal.fire({
                title: "Biztosan töröli szeretnéd ezt a feladatot?",
                text: "Ez a művelet visszavonhatatlan!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Igen, törlés!",
                cancelButtonText: "Mégsem!"
            }).then((result) => {
                if (result.isConfirmed) {
                    const new_tasks = tasks.filter(task => task.id !== taskId);

                    data.users.find(user => user.nickname === currentUser).tasks = new_tasks;
                    localStorage.setItem("data", JSON.stringify(data));

                    e.target.closest("tr").remove();

                    Swal.fire({
                        title: "Törölve!",
                        text: "A feladat sikeresen törölve lett.",
                        icon: "success",
                        showConfirmButton: false
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                }
            });
        })
    });

}

// COUNTER

const new_status = document.getElementById("new_status_counter");
const in_progress_status = document.getElementById("in_progress_status_counter");
const done_status = document.getElementById("done_status_counter");

const status_counter = (tasks) =>{
    let news = 0;
    let in_progresses = 0;
    let dones = 0;

    tasks.forEach((task) => {
        if (task.status === "Új") {
            news += 1;
        }
        else if (task.status=== "Folyamatban") {
            in_progresses += 1;
        }
        else {
            dones += 1;
        }
    })
    set_status_count({news, in_progresses, dones}) ;
}

const set_status_count = (status) => {
    new_status.innerText = status.news;
    in_progress_status.innerText = status.in_progresses;
    done_status.innerText = status.dones;
}

// SORT

function detectSortOrder(table, columnIndex) {
    const rows = Array.from(table.tBodies[0].querySelectorAll("tr"));
    const values = rows.map(row => row.querySelectorAll("td")[columnIndex].textContent.trim().toLowerCase());

    const parsed = values.map(v => columnIndex === 4 ? new Date(v) : isNaN(v) ? v : Number(v));

    let asc = true;
    let desc = true;

    for (let i = 1; i < parsed.length; i++) {
        if (parsed[i - 1] > parsed[i]) asc = false;
        if (parsed[i - 1] < parsed[i]) desc = false;
    }

    if (asc) return "asc";
    if (desc) return "desc";
    return "none";
}

function sortTableByColumn(table, columnIndex, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelectorAll("td")[columnIndex].textContent.trim().toLowerCase();
        const bColText = b.querySelectorAll("td")[columnIndex].textContent.trim().toLowerCase();

        const aVal = columnIndex === 4 ? new Date(aColText) : isNaN(aColText) ? aColText : Number(aColText);
        const bVal = columnIndex === 4 ? new Date(bColText) : isNaN(bColText) ? bColText : Number(bColText);

        if (aVal > bVal) return 1 * dirModifier;
        if (aVal < bVal) return -1 * dirModifier;
        return 0;
    });

    tBody.innerHTML = "";
    sortedRows.forEach(row => tBody.appendChild(row));
}

document.querySelectorAll("#taskManagerTable th").forEach((headerCell, index) => {
    if (index === 0 || index === 1 || index === 4) {
        headerCell.style.cursor = "pointer";
        headerCell.addEventListener("click", () => {
            const tableElement = headerCell.closest("table");

            const currentOrder = detectSortOrder(tableElement, index);

            let asc = true;
            if (currentOrder === "asc") asc = false;
            else asc = true;

            sortTableByColumn(tableElement, index, asc);
        });
    }
});

// FILTERING

let activeFilters = {
    search: "",
    category: "kategória",
    priority: "prioritás",
    status: "státusz"
};

function applyFilters() {
    const rows = document.querySelectorAll("#taskManagerTable tbody tr");

    rows.forEach(row => {
        const id = row.querySelector(".task_id").textContent.toLowerCase();
        const title = row.querySelector(".task_title").textContent.toLowerCase();
        const description = row.querySelector(".task_description").textContent.toLowerCase();
        const category = row.querySelector(".task_category").textContent.toLowerCase();
        const deadline = row.querySelector(".task_deadline").textContent.toLowerCase();
        const priority = row.querySelector(".task_priority").textContent.toLowerCase();
        const status = row.querySelector(".task_status").textContent.toLowerCase();

        let matchesSearch =
            id.includes(activeFilters.search) ||
            title.includes(activeFilters.search) ||
            description.includes(activeFilters.search) ||
            category.includes(activeFilters.search) ||
            deadline.includes(activeFilters.search) ||
            priority.includes(activeFilters.search) ||
            status.includes(activeFilters.search);

        let matchesCategory =
            activeFilters.category === "kategória" || category === activeFilters.category;

        let matchesPriority =
            activeFilters.priority === "prioritás" || priority === activeFilters.priority;

        let matchesStatus =
            activeFilters.status === "státusz" || status === activeFilters.status;

        if (matchesSearch && matchesCategory && matchesPriority && matchesStatus) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

// SEARCH

searchInput.addEventListener("input", () => {
    activeFilters.search = searchInput.value.toLowerCase();
    applyFilters();
});

// CATEGORY FILTER

document.querySelectorAll(".category-filter").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedText = e.target.textContent;
        const selectedCategory = e.target.dataset.category.toLowerCase();

        document.getElementById("categoryDropdown").textContent = selectedText;
        activeFilters.category = selectedCategory;
        applyFilters();
    });
});

// PRIORITY FILTER

document.querySelectorAll(".priority-filter").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedText = e.target.textContent;
        const selectedPriority = e.target.dataset.priority.toLowerCase();

        document.getElementById("priorityDropdown").textContent = selectedText;
        activeFilters.priority = selectedPriority;
        applyFilters();
    });
});

// STATUS FILTER

document.querySelectorAll(".status-filter").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedText = e.target.textContent;
        const selectedStatus = e.target.dataset.status.toLowerCase();

        document.getElementById("statusDropdown").textContent = selectedText;

        document.getElementById("statusDropdown").textContent = selectedText;
        activeFilters.status = selectedStatus;
        applyFilters();
    });
});

// DELETE FILTERS

filterDelete.addEventListener("click", (e) => {
    window.location.reload();
    searchInput.value = "";
})


// LOGOUT

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
})

// USER NICKNAME IN THE WELCOME TEXT

const userWelcome = (document.getElementById("user-nickname").innerHTML = currentUser);