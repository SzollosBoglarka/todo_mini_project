const data = JSON.parse(localStorage.getItem("data")) || {users: []};
const users = data.users;

//console.log(users[0]);

const loginBtn = document.getElementById("login-btn");

if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
        currentUserNickname = document.getElementById("nickname").value
        nicknameValidation(currentUserNickname)
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

