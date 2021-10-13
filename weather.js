const API_KEY = "f7f676014d402a425cf681bdbc4b77de";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const name = data.name;
        const weather = data.weather[0].main;
        console.log(`Your city is ${name}, weather is ${weather}`);
    });
}
function onGeoError() {
    console.log("We can't get Geolocation information");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);