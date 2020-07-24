const apiKey = 'a7dfd5f828a94a549e9192910200407';
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



subBtn.addEventListener('click', function(){
  
  
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userInput.value}`)
	.then(res => res.json())
	.then(data => {
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
})

