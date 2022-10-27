import * as React from 'react';
import ReactMapGL, {
    Marker,
    NavigationControl,
    ScaleControl,
    AttributionControl,
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import generateSampleData from '../generateSampleData';
import Popup, { channelBadge } from './Popup';
import Pin from './Pin';
import Modal from './Modal';

import { useDisclosure } from '@chakra-ui/react';

function Map({ mapboxToken }) {
    const [data] = React.useState(generateSampleData(15));
    const [popupInfo, setPopupInfo] = React.useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    console.log(data);

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
                        setPopupInfo(entry);
                    }}>
                    <Pin
                        selected={popupInfo && popupInfo.id === entry.id}
                        color={channelBadge[entry.channel].colorScheme}
                        icon={channelBadge[entry.channel].icon}
                    />
                </Marker>
            )),
        [data, popupInfo]
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
            localFontFamily="Inter, sans-serif">
            <AttributionControl
                customAttribution="&copy; 2022 campus-maps"
                compact={true}
            />
            <NavigationControl position="bottom-right" />


            {pins}

            {popupInfo && (
                <Popup
                    popupInfo={popupInfo}
                    setPopupInfo={setPopupInfo}
                    onClick={onOpen}
                />
            )}

            <Modal isOpen={isOpen} onClose={onClose} popupInfo={popupInfo} />
        </ReactMapGL>
    );
}

export default Map;
