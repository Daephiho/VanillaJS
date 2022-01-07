
// 5.0 Interval

const clock1 = document.querySelector("#clock1");
const clock2 = document.querySelector("#clock2");
const noSecBtn = document.querySelector("#noSecBtn");

function getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");     // padStart: 문자열이 시작(start)하는 위치에 pad를 넣는다.
    const minutes = String(date.getMinutes()).padStart(2,"0"); // 문자열의 길이는 2여야 하고, 2보다 짧으면 앞을 "0"으로 채운다.
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock1.innerHTML = `${hours}:${minutes}:<small>${seconds}</small>`;
    clock2.innerText = `${hours}:${minutes}`;
}

// setInterval(sayHello, 5000);    // 5초에 한 번씩 sayHello 함수 실행. 
// setTimeout(sayHello, 5000);     // 페이지 실행 후 5초 뒤 함수 실행

getTime()   // 한번 실행해줘야 페이지 실행과 동시에 시간이 출력됨. 아니면 1초를 기다려야 함.
setInterval(getTime, 1000);

noSecBtn.addEventListener("click", function noSecFnc() {
    clock1.classList.toggle("hidden");
    clock2.classList.toggle("hidden");
});




