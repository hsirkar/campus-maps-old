import * as React from 'react';
import ReactMapGL, {
    Marker,
    NavigationControl,
    AttributionControl,
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import Popup, { channelBadge } from './Popup';
import Pin from './Pin';
import Modal from './Modal';

function Map({ mapboxToken, data, selected, setSelected }) {
    const pins = React.useMemo(
        () =>
            data.map((entry, i) => (
                <Marker
                    key={i}
                    color="red"
                    longitude={entry.longitude}
                    latitude={entry.latitude}
                    anchor="top"
                    style={{ cursor: 'pointer' }}
                    onClick={e => {
                        e.originalEvent.stopPropagation();
                        setSelected(i);
                    }}>
                    <Pin
                        selected={i === selected}
                        color={channelBadge[entry.channel].colorScheme}
                        icon={channelBadge[entry.channel].icon}
                    />
                </Marker>
            )),
        [data, selected]
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
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/mapbox/light-v10"
            mapboxAccessToken={mapboxToken}
            attributionControl={false}
            localFontFamily="Inter, sans-serif"
            onClick={() => setSelected(-1)}>
            <AttributionControl
                customAttribution="&copy; 2022 campus-maps"
                compact={true}
            />
            <NavigationControl position="bottom-right" />


            {pins}

            {/* {popupInfo && (
                <Popup
                    popupInfo={popupInfo}
                    setPopupInfo={setPopupInfo}
                    onClick={onOpen}
                />
            )} */}

            {/* <Modal isOpen={isOpen} onClose={onClose} popupInfo={popupInfo} /> */}
        </ReactMapGL>
    );
}

export default Map;
