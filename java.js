// ye apikey hai
const ApiKey = "9e2da9e1167e66f66097b2b4805d155e";
// yeh api url hai
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metrics&q=";
// yeh search field aur button hai
const SearchField = document.querySelector(".searchfield");
const SearchButton = document.querySelector(".searchbtn");
// ye image ki class hai jisse get kiya gaya hai
const weatherImage = document.querySelector(".weatherImage");



// yeh async function hai
async function checkweather(city){
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
    var data = await response.json();
    // agar apko console mai check karna hai tou yahan se karo
    console.log(data);
    // yahan math.round() ka function use kiya hai takay decimal number ko hide kiya ja sakay
    // yeh sara data input field se aa raha hai
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".country").innerHTML = data.sys.country;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".Description").innerHTML =  data.weather[0].description;
    document.querySelector(".Longitude").innerHTML =  data.coord.lon;
    document.querySelector(".Latitude").innerHTML =  data.coord.lat;






    // yahan conditions ki base per hum image ko fetch kar rahay hai yahan per source path ki defne kiya hai
    if(data.weather[0].main == "Cloud"){
        weatherImage.src="Images/clouds.png"; 
    }
    else if(data.weather[0].main == "Rain"){
        weatherImage.src="Images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImage.src="Images/drizzle.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherImage.src="Images/clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherImage.src="Images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherImage.src="Images/snow.png";
    }
}



// yeh eventListener hai yaha hum jo input field mai type karaingay wo easily dekh sakhtay hain
SearchButton.addEventListener("click" , ()=>{
    checkweather(SearchField.value);
});



