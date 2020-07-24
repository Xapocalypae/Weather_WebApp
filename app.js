const apiKey = ''; //Weather API key
const userInput= document.querySelector('#user-input');
const subBtn = document.querySelector('#subBtn');

const dash = document.querySelector('#dashboard')


const tempBox = document.querySelector('#temp-c-value');
const condIconImg = document.querySelector('#icon-img');
const placeName = document.querySelector('#location-box');
const feelslikeC = document.querySelector('#feels-like-value');
const feelLikeText = document.querySelector('#feels-like-text');
const cloud = document.querySelector('#cloud-value');
const precip = document.querySelector('#precip-value');
const windSpeedText = document.querySelector('#wind-speed-value');
const pressure = document.querySelector('#pressure-value');
const humidity = document.querySelector('#humidity-value')
const uv = document.querySelector('#uv-value');

/*
When page loads, check if there's an "latestCity" key.
If it does, it automatically search the weather for that city.
*/
window.onload = checkLatestCity() 
function checkLatestCity(){
  const latestCity = localStorage.getItem("latestCity")
  if(latestCity){ //if exists...
    getWeather(latestCity)
  }
}

function handleCitySearch(){ 
  getWeather(userInput.value)
}

/* 
Instead of creating a event listener that updates the weather, 
create a function that does that and use that function anywhere.
Now, you can call that city when the user clicks the button, and can
search for the latest city the user searched for.
*/

function getWeather(city){
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
	.then(res => res.json())
	.then(data => {
    //Set the city on the 'latestCity' key.
    localStorage.setItem("latestCity", city)

    const dataSet = data.current;
    console.log(data);
    
    const condIcon = dataSet.condition.icon;
    
    tempBox.innerHTML = `${dataSet.temp_c} &#8451`; 

    condIconImg.src= `http:${condIcon}`;
    placeName.innerHTML=`${data.location.name} , ${data.location.country}`;

    feelslikeC.innerHTML = dataSet.feelslike_c;
    feelLikeText.innerHTML =  dataSet.condition.text;

    cloud.innerHTML = dataSet.cloud;
    precip.innerHTML = dataSet.precip_mm;

    windSpeedText.innerHTML = dataSet.wind_kph;
    pressure.innerHTML = dataSet.pressure_in;

    humidity.innerHTML = dataSet.humidity;
    uv.innerHTML = dataSet.uv;
  })
}



