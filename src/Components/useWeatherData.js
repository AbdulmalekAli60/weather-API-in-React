//React
import { useEffect, useState } from "react";
//React

//External Libraries
import axios from "axios";
//External Libraries

// Components
import { useCoordinates } from "../Contexts/CoordinatesContext";
// Components

const useWeatherData = () => {
  const { lat, lng } = useCoordinates();

  const [weatherData, setWeatherData] = useState({
    currentTemperature: 0,
    cityName: "",
    maxTemperature: 0,
    minTemperature: 0,
    descreption: "",
    Icon: "",
  });

  let cancelAxios = null;
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=939d16d309cf6102cc433f7258f8ab18&units=metric`,
        {
          cancelToken: new axios.CancelToken((c) => {
            //unmount in the middle of the request
            // An executor function receives a cancel function as a parameter
            cancelAxios = c;
          }),
        }
      )
      .then(function (response) {
        // handle success
        console.log(response);

        const responseTemp = Math.round(response.data.main.temp);
        const responseCityName = response.data.name;
        const responseMaxTemp = Math.round(response.data.main.temp_max);
        const responseMinTemp = Math.round(response.data.main.temp_min);
        const responseDescreption = response.data.weather[0].description;
        const responseIcon = response.data.weather[0].icon;

        setWeatherData((prevWeatherData) => ({
          ...prevWeatherData,
          currentTemperature: responseTemp,
          cityName: responseCityName,
          maxTemperature: responseMaxTemp,
          minTemperature: responseMinTemp,
          descreption: responseDescreption,
          Icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
        }));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    return () => {
      console.log("cancel axios");
      cancelAxios();
    };
  }, []);

  return weatherData;
};

export default useWeatherData;
