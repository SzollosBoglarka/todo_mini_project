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
}

const renderTaskRow = (task) => {
    return `
        <tr>
            <td>${task.id}</td>
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.category}</td>
            <td>${task.deadline}</td>
            <td>${task.priority}</td>
            <td>${task.status}</td>
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

if(saveBtn) {
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
    editingTaskId = null;
    document.getElementById("taskModalLabel").innerText = "Új feladat";

    title.value = "";
    description.value = "";
    category.value = "";
    deadline.value = "";
    priority.value = "";
    status.value = "";
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
                        icon: "success"
                    });
                }
            });
        })
    });
}

// LOGOUT

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
})

// USER NICKNAME IN THE WELCOME TEXT

const userWelcome = (document.getElementById("user-nickname").innerHTML = currentUser);