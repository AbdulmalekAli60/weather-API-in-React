import "./App.css";
// Material UI
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Material UI

//Components
// import useGeoLocation from "./useGeoLocation";
import WeatherCard from "./Components/WeatherCard";
//Components


const theme = createTheme({
  fonts: {
    fontFamily: "IBMPlexSansArabic",
  },
  palette: {
    primary: {
      main: "#0000ff",
    },
    text:{
      primary: "#fff",
    }
  },
});

function App() {
  // const location = useGeoLocation();
  // if (!location.loaded) {
  //   return <div>Loading...</div>;
  // }

  // if (location.error) {
  //   return <div>Error: {location.error.message}</div>;
  // }
  // console.log(location.coordinates);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
       
        <WeatherCard/>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
