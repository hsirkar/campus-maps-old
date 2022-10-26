import * as React from 'react';
import Map, {
    Marker,
    Popup,
    NavigationControl,
    ScaleControl,
    AttributionControl,
} from 'react-map-gl';

import {
    Badge,
    Box,
    Button,
    ChakraProvider,
    Heading,
    Image,
    Text,
    Icon,
} from '@chakra-ui/react';

import 'mapbox-gl/dist/mapbox-gl.css';
import dayjs from 'dayjs';
import { FaRegHeart, FaRegCalendar } from 'react-icons/fa';
import { BiComment } from 'react-icons/bi';
import { BsFillCalendarDateFill } from 'react-icons/bs';


import sample from './sample';
import theme from './theme';

import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const MAPBOX_TOKEN =
    'pk.eyJ1IjoicmFrcmlzaCIsImEiOiJjamptczYxOGMzc3dzM3BvbDB0andscXdwIn0.GY-HcAV_MakM6gwzSS17Fg';

function App() {
    const [markers] = React.useState(sample);
    const [popupInfo, setPopupInfo] = React.useState(null);

    const pins = React.useMemo(() =>
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
        )), [markers]);

    return (
        <ChakraProvider theme={theme}>
            <Map
                initialViewState={{
                    latitude: 38.9869,
                    longitude: -76.9426,
                    zoom: 15,
                }}
                minZoom={15}
                maxZoom={17}
                style={{ width: '100vw', height: '100vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
                attributionControl={false}
                localFontFamily="Inter, sans-serif">
                <NavigationControl position="top-left" />
                <ScaleControl />
                
                <AttributionControl
                    customAttribution="&copy; 2022 campus-maps" compact={true} />

                {pins}

                {popupInfo && (
                    <Popup
                        longitude={Number(popupInfo.longitude)}
                        latitude={Number(popupInfo.latitude)}
                        onClose={() => setPopupInfo(null)}>
                        <Box>
                            {/* <Image
                                src="https://picsum.photos/500/300"
                                borderRadius="lg"
                            /> */}

                            <Box>
                                <Box display="flex" alignItems="baseline">
                                    {/* <Badge
                                        borderRadius="full"
                                        px="2"
                                        colorScheme="teal">
                                        New
                                    </Badge> */}

                                    {/* <Box as='span' color="gray.500" ml={0}>
                                        <Icon as={FaRegCalendar} mr={1} />
                                        {popupInfo.eventDate.fromNow()}
                                    </Box> */}
                                </Box>

                                <Box
                                    mt={1}
                                    mb={1}
                                    fontWeight="semibold"
                                    as="h4"
                                    lineHeight="tight"
                                    noOfLines={2}
                                    fontSize="md">
                                    {popupInfo.title}
                                </Box>


                                <Box
                                    lineHeight={1.4}
                                    noOfLines={3}
                                    mb={1}>
                                    {popupInfo.description}
                                </Box>

                                
                                <Box color="gray.500">
                                    {popupInfo.time.fromNow()} by{' '}
                                    {popupInfo.user}
                                </Box>

                                <Box display="flex" mt="2" alignItems="center">
                                    <Button
                                        color="gray.600"
                                        fontSize={13}
                                        fontWeight={400}
                                        leftIcon={<FaRegHeart />}
                                        size="xs"
                                        variant="ghost">
                                        {popupInfo.likes}
                                    </Button>

                                    <Button
                                        color="gray.600"
                                        fontSize={13}
                                        fontWeight={400}
                                        leftIcon={<BiComment />}
                                        size="xs"
                                        variant="ghost">
                                        {popupInfo.comments}
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Popup>
                )}
            </Map>
        </ChakraProvider>
    );
}

export default App;
