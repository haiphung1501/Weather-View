const API = '9dad29d874b66bb473d37bcee2c0ead8'; 
const DEFAULT_VALUE = '--';
const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-Name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');

var lat = 0;
var lon = 0;


searchInput.addEventListener('change', (e) => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value},VN&limit=1&appid=${API}`)
        .then(async res=> {
            const temp = await res.json();
            const data = temp[0];
            console.log('Search Input', data);
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            lat = data.lat;
            lon = data.lon;
        });
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&unit='metric`)
        .then(async res => {
            const temp = await res.json();
            console.log(temp);
        });
});