import * as React from 'react';
import ReactMapGL, {
    Marker,
    NavigationControl,
    ScaleControl,
    AttributionControl,
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import sample from './sample';
import Popup from './Popup';

function Map({ mapboxToken }) {
    const [markers] = React.useState(sample);
    const [popupInfo, setPopupInfo] = React.useState(null);

    const pins = React.useMemo(
        () =>
            markers.map((marker, i) => (
                <Marker
                    key={i}
                    color="red"
                    longitude={marker.longitude}
                    latitude={marker.latitude}
                    anchor="top"
                    style={{ cursor: 'pointer' }}
                    onClick={e => {
                        e.originalEvent.stopPropagation();
                        setPopupInfo(marker);
                    }}
                />
            )),
        [markers]
    );

    return (
        <ReactMapGL
            initialViewState={{
                latitude: 38.9869,
                longitude: -76.9426,
                zoom: 15,
            }}
            minZoom={13}
            maxZoom={18}
            style={{ width: '100vw', height: '100vh' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={mapboxToken}
            attributionControl={false}
            localFontFamily="Inter, sans-serif">
            <NavigationControl position="top-left" />
            <ScaleControl />

            <AttributionControl
                customAttribution="&copy; 2022 campus-maps"
                compact={true}
            />

            {pins}

            {popupInfo && (
                <Popup popupInfo={popupInfo} setPopupInfo={setPopupInfo} />
            )}
        </ReactMapGL>
    );
}

export default Map;
