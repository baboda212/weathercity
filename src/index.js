/* 날씨앱 키  */
const API_KEY = '6d41a7760070c50fef0f0cac8f58c929';

let city_name = 'seoul'; //도시명변수 설정 seoul
let API_URL = 
`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

// 현재위치
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    let pos = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
  
    getCurrentWeatherData(pos.lat, pos.lon)  
  }
  
  function getCurrentWeatherData(lat, lon) {
    // 도시명 업데이트
    API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    fetch(API_URL)
    .then(function(응답데이터){
      return 응답데이터.json()
    })
    .then(function(data){
      console.log(data);
      //showWeather(data) 데이터가 들어오는지 확인
        const temp = parseInt(data.main.temp - 273.15); //현재온도(캘빈온도)를 정수로 변환 parseInt
        const desc = data.weather[0].main; //날씨 상태 설명
        const weather_icon = data.weather[0].icon; //날씨 아이콘
        const name = data.name; //도시명

        //DOM출력
        const tempEl = document.querySelector('.temp');
        const descEl = document.querySelector('.desc');
        const iconEl = document.querySelector('.icon');
        const citynameEl = document.querySelector('.cityname');
        
        tempEl.innerHTML = `${temp}&deg`;
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
    })
  
  }; // getCurrentWeatherData
  
  getLocation();
    

function getWeatherData(city_name){
    let API_URL = 
`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;
fetch(API_URL)
    .then(function(응답데이터){
        return 응답데이터.json();
    })
    .then(function(data){
        const temp1 = parseInt(data.main.temp - 273.15);
        const name1 = data.name;
        const icon1 = data.weather[0].icon;
        const citynameEl1 = document.querySelector('.cityname1');
        const tempEl1 = document.querySelector('.temp1');
        const iconEl1 = document.querySelector('.icon1');
        // citynameEl1.textContent = name1;
        //tempEl1.innerHTML = `${temp1}&deg`;
        const weather = document.createElement('div');
        weather.classList.add('weather1');
        let html = `
            <div class="weather1">
                <ul>
                    <li class="cityname1">${city_name}</li>
                    <li class="temp1">${temp1} &deg;</li>
                    <li class="icon1"><img src=src/images/${icon1}.svg alt='아이콘'/></li>
                </ul>
            </div>
        `
        weather.innerHTML += html;
        document.querySelector('.city').appendChild(weather);
        console.log(weather)

    })
};
getWeatherData('Seoul');
getWeatherData('New york');
getWeatherData('London');
