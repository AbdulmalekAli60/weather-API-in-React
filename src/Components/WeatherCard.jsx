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
import { useTranslation } from "react-i18next";
import citiesData from "../JSON/English&ArabicCityNames.json";
//External Libraries

//React
import { useEffect, useState } from "react";
//React

//Components
import useWeatherData from "./useWeatherData";
import getTimeAndDate from "./getTimeAndDate";
//Components

export default function WeatherCard() {
  // === Custom Hocks ===
  const { t, i18n } = useTranslation();
  const {
    maxTemperature,
    minTemperature,
    currentTemperature,
    cityName,
    descreption,
    Icon,
  } = useWeatherData();
  const theme = useTheme();
  // === Custom Hocks ===

  //=== States ===
  const [locale, setLocale] = useState("ar");
  const [city, setCity] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  //=== States ===

  useEffect(() => {
    if(locale === "en") {
      setCity(cityName);
    }else{
      const arabicCity = findArabicCityName();
      setCity(arabicCity);
    }
  },[locale]);


  useEffect(() => {
    i18n.changeLanguage("ar-sa");
    moment.locale("ar-sa"); // Initialize moment with Arabic (Saudi Arabia) locale
    const initialDateAndTime = getTimeAndDate("ar-sa");
    setDateAndTime(initialDateAndTime);
  
    if (cityName) {
      setCity(findArabicCityName());
    }
  }, [cityName]);
  
  function handleLanguageClick() {
    if (locale === "en") {
      setLocale("ar");
      i18n.changeLanguage("ar");
  
      const newDateAndTime = getTimeAndDate("ar-sa");
      setDateAndTime(newDateAndTime);
    } else {
      setLocale("en");
      i18n.changeLanguage("en");
      setCity(cityName);
      const newDateAndTime = getTimeAndDate("en");
      setDateAndTime(newDateAndTime);
    } 
  }

  const direction = locale === "ar" ? "rtl" : "ltr";
  //======Event Handelers======
  
  function findArabicCityName() {
    for (const city of citiesData) {
      if (city.name_en === cityName) {
        return city.name_ar;
      }
    }
    return "City not found";
  }
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
          dir={direction}
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
              dir={direction}
            >
              <Typography
                variant="h2"
                style={{
                  marginRight: "20px",
                  fontFamily: "IBMPlexSansArabic",
                  fontWeight: "500",
                  fontSize: "2.3rem",
                }}
              >
                {city}
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
                  <Typography variant="h6">{t(descreption)}</Typography>

                  {/* Min and Max Tempeture */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h5>
                      {t("Min")}: {minTemperature}
                    </h5>
                    <h5 style={{ margin: "0px 5px" }}>|</h5>
                    <h5>
                      {t("Max")}: {maxTemperature}
                    </h5>
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
          dir={direction}
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
            onClick={handleLanguageClick}
          >
            {locale === "en" ? "Arabic" : "إنجليزي"}
          </Button>
        </div>
        {/*=== Language Button Container=== */}
      </div>
      {/*=== Content Container ===*/}
    </Container>
  );
}
