import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useCoordinates } from "../../Contexts/CoordinatesContext";

export const fetchWeatherData = createAsyncThunk(
  "weatherApi/fetchWeather",
  async ({ lat, lng }) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    console.log("calling fetch weather");
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    );

    // handle success
    const responseTemp = Math.round(response.data.main.temp);
    const responseCityName = response.data.name;
    const responseMaxTemp = Math.round(response.data.main.temp_max);
    const responseMinTemp = Math.round(response.data.main.temp_min);
    const responseDescreption = response.data.weather[0].description;
    const responseIcon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    console.log(
      "from slice",
      responseTemp,
      responseCityName,
      responseIcon,
      responseDescreption,
      responseMaxTemp,
      responseMinTemp
    );
    return {
      responseTemp,
      responseCityName,
      responseMaxTemp,
      responseMinTemp,
      responseDescreption,
      responseIcon,
    };
  }
);
const WeatherAPiSlice = createSlice({
  name: "weatherApi",

  initialState: {
    weather: {},
    isLoading: false,
  },

  extraReducers(builder) {
    builder
      .addCase(fetchWeatherData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.weather = action.payload;

        state.isLoading = false;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// export const { weatherApi } = WeatherAPiSlice.actions;
export default WeatherAPiSlice.reducer;
