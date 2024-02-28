import React, { useEffect, useState } from "react";

const WeatherAppLocation = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude: lat, longitude: long } = position.coords;

        // open weather api create new api key
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        )
          .then((response) => response.json())
          .then((data) => setWeather(data));
      });
    }
  }, []);
  return (
    <div>
      <h1>Weather</h1>
      {weather ? (
        <div>
          <h2>Current Weather</h2>
          <p>City: {weather?.name}</p>
          <p>
            Temperature: {weather?.main?.temp} (Feels Like:{" "}
            {weather?.main?.feels_like})
          </p>
          <p>Conditions: {weather?.weather?.[0]?.description}</p>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};

export default WeatherAppLocation;
