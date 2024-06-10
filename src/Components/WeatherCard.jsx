// Material UI
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@emotion/react";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";
// Material UI

// External Libraries
import moment from "moment";
import "moment/locale/ar-sa";
//External Libraries

//React

//React

//Components
import useWeatherData from "./useWeatherData";
import getTimeAndDate from "./getTimeAndDate";
//Components

export default function WeatherCard() {
  const {
    maxTemperature,
    minTemperature,
    currentTemperature,
    cityName,
    descreption,
    Icon,
  } = useWeatherData();

  const theme = useTheme();

  // const dateAndTime = moment().format('MMMM Do YYYY, h:mm a');

  const dateAndTime = getTimeAndDate();
  console.log(dateAndTime);

  return (
    <Container maxWidth="sm">
      {/* Content Container */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Card */}
        <div
          dir="rtl"
          style={{
            background: "rgb(28 52 91 / 36%)",
            color: theme.palette.text.primary,
            padding: "10px",
            borderRadius: "15px",
            boxShadow: "0px 11px 1px rgba(0,0,0,0.05)",
            width: "100%",
          }}
        >
          {/* Content */}
          <div>
            {/* City and time */}
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "start",
              }}
              dir="rtl"
            >
              <Typography
                variant="h2"
                style={{
                  marginRight: "20px",
                  fontFamily: "IBMPlexSansArabic",
                  fontWeight: "600",
                }}
              >
                {cityName}
              </Typography>

              <Typography
                variant="5"
                style={{
                  marginRight: "20px",
                  fontFamily: "IBMPlexSansArabic",
                  fontWeight: "500",
                  fontSize: "1.5rem",
                }}
              >
                {dateAndTime}
              </Typography>
            </div>
            {/*=== City and time=== */}
            <hr />
            {/* Containder of degree + cloud icon */}
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {/* Degree and descreption */}
              <div>
                {/* Temperature */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h1"
                      style={{
                        textAlign: "right",
                        fontFamily: "IBMPlexSansArabic",
                        fontWeight: "400",
                      }}
                    >
                      {currentTemperature}
                    </Typography>

                    {/* Todo: Temperature Image from API */}
                    <img src={Icon} alt="" />
                  </div>
                  {/* ===Todo: Temperature Image from API ===*/}
                  <Typography variant="h6">{descreption}</Typography>

                  {/* Min and Max Tempeture */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h5>الصغرى: {minTemperature}</h5>
                    <h5 style={{ margin: "0px 5px" }}>|</h5>
                    <h5>الكبرى: {maxTemperature}</h5>
                  </div>
                  {/*=== Min and Max Temreture=== */}
                </div>
                {/* ===Temperature=== */}
              </div>
              {/*=== Degree and descreption=== */}
              <CloudIcon style={{ fontSize: "200px" }} />
            </div>
            {/* Containder of degree + cloud icon */}
          </div>
          {/* ====Content ===*/}
        </div>
        {/* === Card ===*/}

        {/* Language Button Container */}
        <div
          dir="rtl"
          style={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Button
            style={{
              color: theme.palette.text.primary,
              fontWeight: "400",
              fontFamily: "IBMPlexSansArabic",
            }}
            variant="text"
          >
            إنجليزي
          </Button>
        </div>
        {/*=== Language Button Container=== */}
      </div>
      {/*=== Content Container ===*/}
    </Container>
  );
}
