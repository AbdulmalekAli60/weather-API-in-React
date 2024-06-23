import { configureStore } from '@reduxjs/toolkit'
import  weatherApiReducer  from '../features/WeatherAPI/WeatherAPiSlice'
export const store = configureStore({
  reducer: {
    weatherAPI: weatherApiReducer,
  },
})