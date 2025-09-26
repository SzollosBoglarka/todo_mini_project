const data = JSON.parse(localStorage.getItem("data")) || {users: []};
const users = data.users;

const form = document.querySelector(".needs-validation");

if (form) {
    form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
            return;
        }
        event.preventDefault()

        let currentUserNickname = document.getElementById("nickname").value;
        nicknameValidation(currentUserNickname);

        window.location.href = "pages/taskmanager.html";

        removeInvalidSign();

    })
}

const nicknameValidation = (userNickname) => {
    const existingUser = users.find(user => user.nickname === userNickname);

    if (existingUser) {
        localStorage.setItem("currentUser", userNickname);
    } else {
        login(userNickname);
    }
};

const login = (userNickname) => {
    const newUser = {
        id: users.length + 1,
        nickname: userNickname,
        tasks: []
    };

    users.push(newUser);
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("currentUser", userNickname);
};

const removeInvalidSign = () =>{
    form.classList.remove("was-validated");
    form.reset();
};
