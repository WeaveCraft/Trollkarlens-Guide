import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const getMapOptions = () => {
  return {
    disableDefaultUI: true,
    mapTypeControl: true,
    streetViewControl: true,
    styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] }],
  };
};

const center = {
  lat: 58.753109,
  lng: 17.009333,
};

const Map = () => {
const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'YOUR_DEFAULT_API_KEY';

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });


  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GoogleMap
        options={getMapOptions()}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      </GoogleMap>
    </>
  );
};

export default Map;