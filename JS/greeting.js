
// const loginForm = document.querySelector(".login-form");

// const loginInput = loginForm.querySelector("input");    // loginForm 안에서도 요소를 찾아올 수 있다.
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const salut = document.querySelector("#namePlace span");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 
const edit = document.querySelector("#editIcon");
edit.classList.remove("material-icons");
edit.classList.add("hidden");


function submitClick(event) {  // 함수에 인자를 넣어주면 방금 일어난 이벤트에 대한 정보가 인자에 저장됨.
    event.preventDefault();    // 브라우저의 기본 행동을 막아주는 함수 => form 태그의 페이지 리프레쉬를 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}


// 유저 정보 저장.  => localStorage: 브라우저 기본 API로 브라우저에 무언가를 저장할 수 있게 해줌. 작은 DB라고 생각하면 됨.
// localStorage.setItem("username", "Ahn");     username=key / Ahn=value

function paintGreetings(username) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    salut.classList.remove(HIDDEN_CLASSNAME);
    const date = new Date();
    if((date.getMonth()+1) === 12 & (date.getDate()) === 25) {
        salut.innerText = `Merry Christmas ${username}`;
    } else {
        salut.innerText = `Hello ${username}`;
    }
    
    edit.classList.add("material-icons");
    edit.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitClick);
} else {
    paintGreetings(savedUsername);
}

function pointer() {
    edit.style.cursor = "pointer";
}

function nameEdit(event) {
    event.preventDefault();
    edit.classList.remove("material-icons");
    edit.classList.add("hidden");
    localStorage.removeItem("username");
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value = "";
    salut.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitClick);
}

edit.addEventListener("click", nameEdit);
edit.addEventListener("onmouseover", pointer());