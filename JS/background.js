const images = ["image5.jfif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];  // floor로 내렸기때문에 3은 절대로 안 나옴. 오직 0 1 2 


// 자바스크립트를 이용해서 HTML 안에 이미지 넣기

// document 안에 img태그 요소를 만들고 bgImage라는 변수에 넣는다.
const bgImage = document.createElement("img");

// img태그에 src속성을 넣어주고 그 안에 경로를 넣어준다. 이미지파일명은 랜덤 생성.
bgImage.src = `image/${chosenImage}`;

// body 태그 안에 생성한 img태그 요소를 넣어준다.
document.body.appendChild(bgImage); // append: 끝에 위치시킴. prepend: 가장 앞에 위치시킴.