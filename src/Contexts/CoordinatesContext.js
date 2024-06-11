//React
import { createContext, useContext, useEffect } from "react";
//React

//Components
import useGeoLocation from "../useGeoLocation";
import Loader from "../Components/Loader.jsx";
import AskForPremissionModal from "../Components/AskForPremissionModal.jsx";
//Components

const CoordinatesContext = createContext({
  lat: "",
  lng: "",
});

export const CoordinatesProvider = ({ children }) => {
  const location = useGeoLocation();

  useEffect(() => {
    if (location.loaded && location.coordinates) {
      const { lat, lng } = location.coordinates;
      console.log(lat, lng);
    }
  }, []);

  if (!location.loaded) {
    return <Loader />;
  }

  if (location.error) {
    return (
      <div>
        <AskForPremissionModal message={location.error.message} />
      </div>
    );
  }

  return (
    <CoordinatesContext.Provider
      value={{ lat: location.coordinates.lat, lng: location.coordinates.lng }}
    >
      {children}
    </CoordinatesContext.Provider>
  );
};

export const useCoordinates = () => {
  return useContext(CoordinatesContext);
};
