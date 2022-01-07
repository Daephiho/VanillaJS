
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

let toDos = [];   // 애플리케이션이 시작할 때 toDos 배열이 비워진 채로 있기 때문에 
                    // 새로운 todo들을 입력하면 로컬스토리지에 원래 있던 것들이 삭제되고 새 todo들만 들어감. todo가 비워지지 않은 채로 시작할 수 있게 바꿔줘야 함.
                    // 값이 바뀔 수 있게 let으로 설정해준다.

function saveToDos() {  // 로컬스토리지에 todo들을 저장하는 펑션
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
    // 로컬스토리지에 todos라는 key로 저장되며 밸류의 형태는 a,b,c,...
    // JSON.stringify(): 어떤 요소든 괄호 포함 전체를 문자열로 바꿔주는 펑션.
    // JSON.parse(): 문자열을 다시 자바스크립트가 이해하는 object로 바꿔주는 펑션. 텍스트화 시킨 toDos를 다시 살아있는 배열로 이해할 수 있음.
}


function deleteToDo(event) {    // 입력한 ToDo에 대한 이벤트 속성을 가져오면 
                                // 어떤 걸 삭제해야할지 알 수 있음
    const parentLi = event.target.parentElement;
                     // 삭제버튼이 눌린 li의 id값을 가져왔고, 이제 로컬스토리지에서 해당 id에 해당하는 value를 삭제해줘야 한다.
    parentLi.remove(); // toDoList.removeChild(parentLi) 와 같은 기능
    toDos = toDos.filter(((toDo) => toDo.id !== parseInt(parentLi.id)));    // id가 같은 todo를 제외한 요소들로만 배열을 다시 채운다.
    saveToDos(); 
}

function paintToDo(newTodo) {   // 입력한 toDo 받기
    const li = document.createElement("li");
    li.id = newTodo.id; // todo가 작성되면서 함께 생성된 id값을 li태그의 id속성으로 부여함. 
    const span = document.createElement("span"); // 아직 li 내부에 있는게아님
    span.innerText = newTodo.text+" ";
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // span태그가 li태그 안으로 들어감
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";  // 입력한 todo는 newTodo에 들어가고 인풋은 비움.
    const newTodoObj = {id:Date.now(), text:newTodo}    // 스토리지에서 삭제하려면 id값을 함께 넣어줘야함. Date.now(): 1970년 1월1일부터 현재까지의 시간을 밀리초로 변환하여 나타냄.
    toDos.push(newTodoObj);    // 오브젝트를 toDos배열에 저장
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

// function sayHello(item) {   // 이벤트리스너에서 event정보를 알 수 있는 것 처럼 어떤 아이템에 의해 함수가 실행했는지 알 수 있음
//     console.log("by function " + item); // 
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {    // 로컬스토리지에 todo가 있다면
    const parseToDos = JSON.parse(savedToDos);

    // 배열의 각 요소마다 펑션을 실행할 수 있는 기능
    // parseToDos.forEach(sayHello);   // 배열의 값이 세 개면 sayHello() 함수를 세 번 실행함.
    // parseToDos.forEach((item) => console.log("by forEach ", item)); // 밖에 따로 함수를 만들지 않고 같은 기능 수행.  =>: arrow function 함수를 안에서 만드는 것.
    toDos = parseToDos; // 스토리지에 있는 todo들을 toDos 배열에 넣어줌. toDos배열에 있는 값들은 span태그 안으로 들어가 화면에 출력됨.
    parseToDos.forEach(paintToDo);
}

// X버튼을 눌렀을 때 화면에서는 삭제되지만(li.remove()) 로컬스토리지에는 남아있기 때문에 새로고침을 하면 다시 생겨남. 스토리지에서 삭제해줘야 함.
// toDos 배열을 [{id:1212, text:"a"}, {id:3232, text:"b"}, ...]; 형태로 바꿔주면 삭제할 수 있음. 각 todo마다 아이디를 부여해줘야 함.
// 앞으로 todo들이 생겨날 때마다 각자 랜덤한 id값을 가지게 될 것.
// 사실 배열에서 원하는 todo를 삭제하는 게 아니라, 삭제하길 원하는 todo를 제외하고 새 배열을 생성시키는 방식. => filter 함수 사용

//function todoFilter() { // 특정 오브젝트를 배열 안에 남겨놓길 원한다면, 그 오브젝트에 대해서 filter함수가 실행될 때 반드시 true값을 반환해야 한다.
                        // => 삭제하길 원하는 오브젝트에 대해 함수가 실행될 때 false값을 반환시켜주면 된다.
    // 매커니즘: 삭제버튼을 누르면 해당 li의 id값을 가져온다.
    //           todo배열에서 가져온 id값에 해당하는 object를 삭제한다.(해당 object를 제외) 
//}

// const arr = ["pizza", "hamburger", "gimbap"]                     배열 생성
// arr.filter(todoFilter); ==> ['pizza', 'hamburger', 'gimbap']     함수 생성 전 필터링(필터링 조건이 없기 때문에 아무것도 사라지지 않음)
//function todoFilter(item) {return item !== "hamburger"}           배열의 각 요소들이 함수의 인자(item)로 들어가고, 인자가 "hamburger"와 같지 않은 것들만 반환시킴(배열에 유지) 
//arr.filter(todoFilter); ==> ['pizza', 'gimbap']                   "hamburger" 요소가 인자로 들어가고 조건에 대한 결과로 false가 나왔기 때문에 반환되지 않았고 배열에서도 사라짐.
// 동일한 예시
// const arr = [{"id":1640317170599,"text":"a"},{"id":1640317170903,"text":"b"},{"id":1640317171398,"text":"c"},{"id":1640317172050,"text":"d"}]; ==>  a, b, c, d가 들어있음
// function todoFilter(todo) {return todo.id !== 1640317170903}
// arr.filter(todoFilter); ==>  1640317170903라는 id값을 가진 b가 빠진 세 개의 object만 남음.