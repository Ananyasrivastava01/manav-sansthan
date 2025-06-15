import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 28.9716,
  lng: 77.1594
};

const api_key = import.meta.env.VITE_API_KEY;

// const MapContainer = () => {
//   return (
//     <LoadScript googleMapsApiKey={`${api_key}`}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={14}
//       > 
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

const MapContainer = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.805341763162!2d77.01266025591255!3d29.696422804763927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e7aab93116651%3A0xc80f4c6d25426cc6!2s686%2F8%2C%20Sector%208%2C%20Karnal%2C%20Phusgarh%20Part%2C%20Haryana%20132001!5e0!3m2!1sen!2sin!4v1732636778704!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapContainer;