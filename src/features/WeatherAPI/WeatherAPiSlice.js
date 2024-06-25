import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useCoordinates } from "../../Contexts/CoordinatesContext";

export const fetchWeatherData = createAsyncThunk(
  "weatherApi/fetchWeather",
  async () => {
    const { lat, lng } = useCoordinates();
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    console.log("calling fetch weather");
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
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
    console.log("from slice",responseTemp, responseCityName, responseIcon, responseDescreption,responseMaxTemp,responseMinTemp);
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
    result: "empty",
    weather: {
      responseTemp: 0,
      responseCityName: "",
      responseMaxTemp: 0,
      responseMinTemp: 0,
      responseDescription: "",
      responseIcon: "",
    },
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

export const { changeResult } = WeatherAPiSlice.actions;
export default WeatherAPiSlice.reducer;
