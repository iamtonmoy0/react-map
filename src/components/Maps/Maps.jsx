import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Maps = () => {
	const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};



	return (
		<div>
			<LoadScript googleMapsApiKey="">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} >

			</GoogleMap>

			</LoadScript>
		</div>
	);
}

export default Maps;
