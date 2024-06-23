/* eslint-disable no-unused-vars */
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeatherData = createAsyncThunk(
  "weatherApi/fetchWeather",
  async () => {
    console.log("calling fetch weather");
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=24.7&lon=46.5&appid=2c511dc8a04616514a9e1ff2f31c8043"
      // {
      // 	cancelToken: new axios.CancelToken((c) => {
      // 		cancelAxios = c;
      // 	}),
      // }
    );

    // handle success
    const responseTemp = Math.round(response.data.main.temp);
    const responseCityName = response.data.name;
    const responseMaxTemp = Math.round(response.data.main.temp_max);
    const responseMinTemp = Math.round(response.data.main.temp_min);
    const responseDescreption = response.data.weather[0].description;
    const responseIcon = response.data.weather[0].icon;

    // setWeatherData((prevWeatherData) => ({
    //   ...prevWeatherData,
    //   currentTemperature: responseTemp,
    //   cityName: responseCityName,
    //   maxTemperature: responseMaxTemp,
    //   minTemperature: responseMinTemp,
    //   descreption: responseDescreption,
    //   Icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
    // }));
  }
);
const WeatherAPiSlice = createSlice({
  name: "weatherApi",

  initialState: {
    result: "empty",
    weather: {},
    isLoading: false,
  },

  reducers: {
    changeResult: (state, action) => {
      state.result = "changed";
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchWeatherData.pending, (state, action) => {
        console.log("============");
        console.log(state, action);
        state.isLoading = true;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { changeResult } = WeatherAPiSlice.actions;
export default WeatherAPiSlice.reducer;
