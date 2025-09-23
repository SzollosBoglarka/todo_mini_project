export var currentUserNickname;

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
    users.forEach((user) => {
        if (user.nickname === userNickname) {
            //TODO: exception handling -> nickname already exist
        }
    })
    login(userNickname);
}

const login = (userNickname) => {
    users.push({id: users.length + 1, nickname: userNickname, tasks: []});
    //console.log(users.length);
    localStorage.setItem("data", JSON.stringify(data));
}

