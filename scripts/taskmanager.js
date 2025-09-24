const data = JSON.parse(localStorage.getItem("data"));

const currentUser = localStorage.getItem("currentUser");
const tasks = data.users.find(user => user.nickname === currentUser).tasks || [];

//console.log(currentUser);

window.onload = () => {
    const tbody = document.querySelector("#taskManagerTable tbody");
    tasks.forEach(task => {
        tbody.insertAdjacentHTML("beforeend", renderTaskRow(task));
    });
    console.log(tasks);
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
                <button class="btn">Szerkesztés</button>
                <button class="btn">Törlés</button>
            </td>
        </tr>
    `;
}

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
})

const userWelcome = (document.getElementById("user-nickname").innerHTML = currentUser);