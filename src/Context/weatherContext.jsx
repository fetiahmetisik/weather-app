import axios from "axios";
import {createContext, useContext, useEffect, useState} from "react";
import data from "../CitiesData/citiesData.json";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
  const cities = data.cities;
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Ankara");

  useEffect(() => {
    const selectedCity = cities?.find((item) => item.name === city);
    if (!selectedCity) return;

    const key = "524b90090f2b47d2bcd141220250803"; // Yeni API anahtarın


    

    axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${selectedCity.latitude},${selectedCity.longitude}&days=8&aqi=no&alerts=no`
    )
    .then((res) => {
      console.log("API Response:", res.data); // API çıktısını kontrol et
      setWeather(res.data.forecast.forecastday);
    })
    .catch((e) => console.error("API Hatasi:", e));
  
  }, [city]);

  const values = {weather, setWeather, city, setCity, cities};

  return (
    <WeatherContext.Provider value={values}>
      {weather ? children : <p>Yükleniyor...</p>}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
