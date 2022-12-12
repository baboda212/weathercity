/* 날씨앱 키  */
const API_KEY = '6d41a7760070c50fef0f0cac8f58c929';

let city_name = 'seoul'; //도시명변수 설정 seoul
let API_URL = 
`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;


fetch(API_URL)
.then(function(응답데이터){
    return 응답데이터.json();
    
})
.then(function(data){
    console.log(data);
    console.log(data[1]);
    //myfunc(data) -함수를 이용하여 밖으로 내보내기할때 사용
    /* 날씨 상태와 날씨 아이콘 체크하기 */
    const desc = data.weather[0].main; //날씨상태설명
    const weather_icon = data.weather[0].icon; //날씨아이콘
    const temp = parseInt(data.main.temp - 273.15); //현재온도(화씨-캘빈온도)-정수로 변환 parseInt
    const name = data.name; //도시명
    console.log(name, desc, weather_icon, temp);

    //UI출력(DOM)
    const citynameEl = document.querySelector('.cityname');
    const iconEl = document.querySelector('.icon');
    const tempEl = document.querySelector('.temp');
    const descEl = document.querySelector('.desc');

    citynameEl.textContent = name;
    iconEl.innerHTML = `<img src=src/images/${weather_icon}.svg alt='아이콘'/>`;
    tempEl.innerHTML = `${temp}&deg`;
    descEl.textContent = desc;

    /* 배경이미지 변경 */
    const body = document.querySelector('body');
    body.classList.remove(...body.classList);
    if(desc === 'Clouds'){
        body.classList.add('weather-clouds');
    } else if(desc === 'Clear'){
        body.classList.add('weather-clear'); 
    } else if(desc === 'Thunderstorm'){
        body.classList.add('weather-thunderstorm'); 
    } else if(desc === 'Mist'){
        body.classList.add('weather-mist'); 
    } else if(desc === 'Rain'){
        body.classList.add('weather-rain'); 
    } else if(desc === 'Snow'){
        body.classList.add('weather-snow'); 
    } else if(desc === 'Atmosphere'){
        body.classList.add('weather-clouds'); 
    } else {
        body.classList.add('weather-default'); 
    }

    
    
    /* const temp1 = parseInt(data.main[1].temp - 273.15);
    const name1 = data.name[1];
    const citynameEl1 = document.querySelector('.cityname1');
    const tempEl1 = document.querySelector('.temp1');
    citynameEl1.textContent = name1;
    tempEl1.innerHTML = `${temp1}&deg`; */
});

function getWeatherData(){
    city_name = 'new york';
    let API_URL = 
`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;
fetch(API_URL)
    .then(function(응답데이터){
        return 응답데이터.json();
    })
    .then(function(data){
        const temp1 = parseInt(data.main.temp - 273.15);
        const name1 = data.name;
        const citynameEl1 = document.querySelector('.cityname1');
        const tempEl1 = document.querySelector('.temp1');
        citynameEl1.textContent = name1;
        tempEl1.innerHTML = `${temp1}&deg`;
    })
};
getWeatherData()

function getWeatherData1(){
    city_name = 'paris';
    let API_URL = 
`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;
fetch(API_URL)
    .then(function(응답데이터){
        return 응답데이터.json();
    })
    .then(function(data){
        const temp2 = parseInt(data.main.temp - 273.15);
        const name2 = data.name;
        const citynameEl2 = document.querySelector('.cityname2');
        const tempEl2 = document.querySelector('.temp2');
        citynameEl2.textContent = name2;
        tempEl2.innerHTML = `${temp2}&deg`;
    })
};
getWeatherData1()

function getWeatherData2(){
    city_name = 'london';
    let API_URL = 
`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;
fetch(API_URL)
    .then(function(응답데이터){
        return 응답데이터.json();
    })
    .then(function(data){
        const temp3 = parseInt(data.main.temp - 273.15);
        const name3 = data.name;
        const citynameEl3 = document.querySelector('.cityname3');
        const tempEl3 = document.querySelector('.temp3');
        citynameEl3.textContent = name3;
        tempEl3.innerHTML = `${temp3}&deg`;
    })
};
getWeatherData2()