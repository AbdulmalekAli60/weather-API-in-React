// Material UI
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@emotion/react";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";
// Material UI

// External Libraries
import axios from "axios";
//External Libraries

//React
import { useEffect, useState } from "react";
//React

//Components
// import GetTemp from "./GetTemp";
import useGeoLocation from "../useGeoLocation";
//Components

export default function WeatherCard({ lat, lng }) {
  const theme = useTheme();

  const [requestInfo, setRequestInfo] = useState({
    CurrentTempreture: 0,
    cityName: "",
    MaxTempreture: 0,
    MinTempreture: 0,
  });

  useEffect(() => {
    console.log("Request Use effect");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=939d16d309cf6102cc433f7258f8ab18&units=metric`
      )
      .then(function (response) {
        // handle success
        console.log(response);
        // console.log(response.data.name);

        const responseTemp = Math.round(response.data.main.temp);
        const responseCityName = response.data.name;
        const responseMaxTemp = Math.round(response.data.main.temp_max);
        const responseMinTemp = Math.round(response.data.main.temp_min);

        // const responseInfo = {
        //   CurrentTempreture: responseTemp,
        //   cityName: responseCityName,
        //   MaxTempreture: responseMaxTemp,
        //   MinTempreture: responseMinTemp,
        // };
        setRequestInfo({
          ...requestInfo,
          CurrentTempreture: responseTemp,
          cityName: responseCityName,
          MaxTempreture: responseMaxTemp,
          MinTempreture: responseMinTemp,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [lat, lng]);

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
                الرياض
              </Typography>

              <Typography
                variant="5"
                style={{
                  marginRight: "20px",
                  fontFamily: "IBMPlexSansArabic",
                  fontWeight: "500",
                }}
              >
                الإثنين 10-10-2024
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
                  <Typography
                    variant="h1"
                    style={{
                      textAlign: "right",
                      fontFamily: "IBMPlexSansArabic",
                      fontWeight: "400",
                    }}
                  >
                    {/* {temp} */}
                  </Typography>

                  {/* Todo: Temperature Image from API */}
                  {/* ===Todo: Temperature Image from API ===*/}
                  <Typography variant="h6">Broken Clouds</Typography>

                  {/* Min and Max Tempeture */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h5>الصغرى 16</h5>
                    <h5 style={{ margin: "0px 5px" }}>|</h5>
                    <h5>الكبرى 16</h5>
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
