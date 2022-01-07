const quotes = [
    {
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown, Jr.",
    },
    {
    quote: "The undertaking of a new action brings new strength.",
    author: "Richard L. Evans",
    },
    {
    quote: "Perfection is not attainable, but if we chase perfection we can catch excellence..",
    author: "Vince Lombardi",
    },
    {
    quote: "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
    author: "Edith Wharton",
    },
    {
    quote: "Somewhere, something incredible is waiting to be known.",
    author: "Sharon Begley",
    },
    {
    quote: "The most beautiful thing in the world is, of course, the world itself.",
    author: "Wallace Stevens",
    },
    {
    quote: "No matter what people tell you, words and ideas can change the world.",
    author: "Robin Williams",
    },
    {
    quote: "There is nothing either good or bad but thinking makes it so.",
    author: "William Shakespeare",
    },
    {
    quote: "People may hear your words, but they feel your attitude.",
    author: "John C. Maxwell",
    },
    {
    quote: "Our attitude toward life determines life's attitude towards us.",
    author: "John N. Mitchell",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.random(): 숫자 랜덤 생성
// Math.floor(): 내림, ceil(): 올림, round(): 반올림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // quotes 배열의 길이를 생성될 수 있는 값 중 최대값으로

quote.innerText = todaysQuote.quote;   // quote 오브젝트 가져오기
author.innerText = `${todaysQuote.author}`;

