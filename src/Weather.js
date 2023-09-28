import React, {useState} from 'react';

function Weather(){
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] =useState("");

    const API_KEY = "83b2fa91d25dc219db3040679e596ec7"
    const fetchWeather = async()=>{
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await response.json();
            if(data.cod===200){
                setWeatherData(data);
            }else{
                setWeatherData(null);
            }
        }catch(error){
            console.error("Error fetching weather:",error);
        }
    }
    return(
        <div>
            <input
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            placeholder="Enter city"
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weatherData &&(
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>{Math.round(weatherData.main.temp-273.15)}degree C</p>
                    <p>{weatherData.weather[0].description}</p>
        </div>
            )}
            </div>
    )
}
export default Weather;