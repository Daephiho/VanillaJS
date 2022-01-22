// 화면에 날씨 보여주기 
// https://home.openweathermap.org/ API 사용. 위치, 날씨, 미세먼지 농도, 자외선 수치 등을 가져올 수 있음.

const API_KEY = "48bcd3bce3fd5d94f931381110f43627";

function onGeoOk(position) {
    const latitude = position.coords.latitude;     // 위도
    const longitude = position.coords.longitude; // 경도

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`   
    // fetch(): 자바스크립트가 url을 불러줌. 끝에 units=metric 붙여줘야 섭씨로 출력됨.

    fetch(url).then(response => response.json()).then(data => {
        const location = data.name;
        const temp = data.main.temp;
        const tempMin = data.main.temp_min;
        const tempMax = data.main.temp_max;
        const weather = data.weather[0].main;

        const weatherSpan = document.querySelector("#weather span:first-child");
        const locationSpan = document.querySelector("#weather span:last-child");

        console.log(weatherSpan);
        weatherSpan.innerHTML = temp+"°C  |  <small>"+tempMin+"(min)  /  "+tempMax+"(max)</small>";
     
        locationSpan.innerText = location;
    });

}

function onGeoError() {
    const weatherSpan = document.querySelector("#weather span:first-child");
    weatherSpan.innerText = "No Location Info..."
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 현위치 좌표 가져오기. 성공했을 시 함수, 오류 시 함수
