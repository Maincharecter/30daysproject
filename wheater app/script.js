const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const apikey = "&appid=a1574e1e149853e48e9e6bcb6a6a8c00"
const searchbox = document.querySelector(".searchInput");
const searchbtn = document.querySelector(".searchbtn");
async function getData(city) {
    try {
        const response = await fetch(apiUrl + city + apikey);
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        console.log(data);

        const weatherIcon = document.querySelector(".imgofwheather")
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".windspeed").innerHTML = Math.round(data.wind.speed) + "  km/hr";
        document.querySelector(".temp").innerHTML = Math.round((data.main.temp - 273)) + "°c";
         if (data.weather[0].main === "Clear") {
            weatherIcon.src = "clear.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "drizzle.png";
        } else if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "snow.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "rain.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "mist.png";
        } else {
            weatherIcon.src = "clear.png";
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
searchbtn.addEventListener("click", () => {
    getData(searchbox.value)

}
)
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        getData(searchbox.value)
    }
})

getData();