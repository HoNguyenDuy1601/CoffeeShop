import React from "react";
import Map, { Marker, FullscreenControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 10.85,
    longitude: 106.77,
    zoom: 15,
  });

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    let crd = pos.coords;
    setViewport({
      latitude: crd.latitude,
      longitude: crd.longitude,
      zoom: 15,
    });
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    // <div className="h-[500px] flex pt-8 ">
    <div className="h-[500px] flex mb-12 py-[50px]">
      <div className="bg-[orange] text-white pt-5 sm: text-xs">
        <div className="sm:text-base lg:text-xl mx-3 ">
          Chi nhánh MetaCoffee
        </div>
        <div
          className="pt-5 cursor-pointer mx-3 "
          onClick={() => {
            setViewport({ latitude: 10.85, longitude: 106.77, zoom: 14 });
          }}
        >
          CN1: Số 1, Võ Văn Ngân, Thủ Đức
        </div>
        <div
          className="pt-5 cursor-pointer mx-3"
          onClick={() => {
            setViewport({ latitude: 10.7586, longitude: 106.6655, zoom: 14 });
          }}
        >
          CN2: 113 Ngô Quyền, quận 3, thành phố Hồ Chí Minh
        </div>
        <div
          className="pt-5 cursor-pointer mx-3"
          onClick={() => {
            setViewport({
              latitude: 10.85197801665576,
              longitude: 106.75211897073096,
              zoom: 14,
            });
          }}
        >
          CN3: 76/1, Dương Văn Cam, Linh Tây, Thủ Đức
        </div>
      </div>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiaG9uZ3V5ZW5kdXkiLCJhIjoiY2wxdHI1Z2d1MjBxeDNqbW83NGY2OGF3aiJ9.VC9ykiMMFYVEwBZeHkSajg"
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onMove={(evt) => setViewport(evt.viewState)}
      >
        <Marker longitude={106.7719115688765} latitude={10.850521188927681}>
          <img
            src="https://smarttrain.edu.vn/assets/uploads/2017/10/678111-map-marker-512.png"
            className="w-[45px]"
            alt=""
          />
        </Marker>
        <Marker longitude={106.6655} latitude={10.7586}>
          <img
            src="https://smarttrain.edu.vn/assets/uploads/2017/10/678111-map-marker-512.png"
            className="w-[45px]"
            alt=""
          />
        </Marker>
        <Marker longitude={106.75211897073096} latitude={10.85197801665576}>
          <img
            src="https://smarttrain.edu.vn/assets/uploads/2017/10/678111-map-marker-512.png"
            className="w-[45px]"
            alt=""
          />
        </Marker>
        <FullscreenControl />
      </Map>
    </div>
  );
};

export default MapBox;
