import "./App.css";
// Material UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Material UI

//Components
import WeatherCard from "./Components/WeatherCard";
import { CoordinatesProvider } from "./Contexts/CoordinatesContext";
//Components

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
  return (
    <ThemeProvider theme={theme}>
      <CoordinatesProvider>
        <div className="App">
          <WeatherCard />
        </div>
      </CoordinatesProvider>
    </ThemeProvider>
  );
}

export default App;
