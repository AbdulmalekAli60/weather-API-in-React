import "./App.css";
// Material UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Material UI

//Components
import useGeoLocation from "./useGeoLocation";
import WeatherCard from "./Components/WeatherCard";
// import GetTemp from "./GetTemp";
//Components

//React
import { useEffect } from "react";
//React

const theme = createTheme({
  fonts: {
    fontFamily: "IBMPlexSansArabic",
  },
  palette: {
    primary: {
      main: "#0000ff",
    },
    text: {
      primary: "#fff",
    },
  },
});

function App() {
  const location = useGeoLocation();
  useEffect(() => {
    if (location.loaded && location.coordinates) {
      const { lat, lng } = location.coordinates;
      console.log(lat, lng);
    }
  }, []);

  if (!location.loaded) {
    return <div>Loading...</div>;
  }

  if (location.error) {
    return <div>Error: {location.error.message}</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <WeatherCard
          lat={location.coordinates.lat}
          lng={location.coordinates.lng}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
