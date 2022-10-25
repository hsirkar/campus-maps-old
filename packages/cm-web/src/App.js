import * as React from 'react';
import Map, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN =
    'pk.eyJ1IjoicmFrcmlzaCIsImEiOiJjamptczYxOGMzc3dzM3BvbDB0andscXdwIn0.GY-HcAV_MakM6gwzSS17Fg'; // Set your mapbox token here

function App() {
    return (
        <Map
            initialViewState={{
                latitude: 38.9869,
                longitude: -76.9426,
                zoom: 15,
            }}
            minZoom={15}
            maxZoom={17}
            style={{ width: '100vw', height: '100vh' }}
            // mapStyle="mapbox://styles/rakrish/cl9hhahrr000q15khpnaawbex"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={MAPBOX_TOKEN}>
            <Marker latitude={38.9869} longitude={-76.9426} color="red" />
        </Map>
    );
}

export default App;
