async function getLocation() {
    return new Promise(function (resolve, reject) {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position.coords)
            })
        } catch (e) {
            reject(new Error(e))
        }
    })
}

async function getWeather(coords) {
    return new Promise(function(resolve, reject) {
        const apiKey = "f5897078bc0efae6a62dc053cad09d9b";
        const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
        const req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            if (req.status === 200) {
                resolve(JSON.parse(req.responseText));
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.send();
    })
}

getLocation()
.then(coords => {
    getWeather(coords)
    .then(weather => {
        document.getElementById('weather').innerHTML = weather.main.temp + ' ' + weather.weather[0].description;
        console.log(weather)
    })
})
