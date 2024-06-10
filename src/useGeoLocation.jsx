//React
import { useEffect, useState } from "react";
//React

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  useEffect(() => {
    let isMounted = true;

    const onSuccess = (location) => {
      if (isMounted) {
        setLocation({
          loaded: true,
          coordinates: {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          },
        });
      }
    };

    const onError = (error) => {
      if (isMounted) {
        setLocation({
          loaded: true,
          error,
        });
      }
    };

    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    return () => {
      isMounted = false;
    };
  }, []);

  return location;
};

export default useGeoLocation;
