import * as React from 'react';
import ReactMapGL, {
    Marker,
    NavigationControl,
    AttributionControl,
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import Pin from './Pin';
import { channels } from '../util';

function Map({ mapboxToken, data, selected, setSelected, mapRef }) {
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
                        color={channels[entry.channel].colorScheme}
                        icon={channels[entry.channel].icon}
                    />
                </Marker>
            )),
        [data, selected, setSelected]
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
            style={{ width: '100%', height: '100vh' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={mapboxToken}
            attributionControl={false}
            localFontFamily="Inter, sans-serif"
            onClick={() => setSelected(-1)}
            ref={mapRef}>
            <AttributionControl
                customAttribution="&copy; 2022 campus-maps"
                compact={true}
            />
            <NavigationControl position="bottom-right" />

            {pins}
        </ReactMapGL>
    );
}

export default Map;
