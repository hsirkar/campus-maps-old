import * as React from 'react';
import Map, {
    Marker,
    Popup,
    NavigationControl,
    ScaleControl,
} from 'react-map-gl';

import {
    Badge,
    Box,
    Button,
    ChakraProvider,
    Heading,
    IconButton,
    Image,
    Text,
    Icon
} from '@chakra-ui/react';

import 'mapbox-gl/dist/mapbox-gl.css';
import { CloseIcon, SearchIcon, StarIcon } from '@chakra-ui/icons';
import dayjs from "dayjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiComment } from 'react-icons/bi'

import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const MAPBOX_TOKEN =
    'pk.eyJ1IjoicmFrcmlzaCIsImEiOiJjamptczYxOGMzc3dzM3BvbDB0andscXdwIn0.GY-HcAV_MakM6gwzSS17Fg';


function App() {
    const [markers, setMarkers] = React.useState([{
        longitude: -76.936,
        latitude: 38.985,
        title: 'Hallowen Party at ZTA',
        description: 'Be there or be 🎃',
        user: 'bwang22',
        time: dayjs().subtract(5, 'min'),
        likes: 194,
        comments: 6,
    }]);

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
        ))
    );

    return (
        <ChakraProvider>
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
                mapboxAccessToken={MAPBOX_TOKEN}>
                <NavigationControl position="top-left" />
                <ScaleControl />

                {pins}

                {popupInfo && (
                    <Popup
                        anchor="top"
                        longitude={Number(popupInfo.longitude)}
                        latitude={Number(popupInfo.latitude)}
                        onClose={() => setPopupInfo(null)}>


                        <Box>
                            <Image src="https://picsum.photos/400/200" borderRadius="lg" />

                            <Box pt={4}>
                                <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                                        New
                                    </Badge>
                                    <Text
                                        color="gray.500"
                                        ml={1}>
                                            {popupInfo.time.fromNow(true)} &bull; {popupInfo.user}
                                    </Text>
                                </Box>

                                <Box
                                    mt='2'
                                    lineHeight='tight'
                                    noOfLines={1}>
                                    <Heading size="xs">
                                        {popupInfo.title}
                                    </Heading>
                                </Box>

                                <Box>
                                    <Text>
                                        {popupInfo.description}
                                    </Text>
                                </Box>

                                <Box display='flex' mt='2' alignItems='center'>
                                    <Button color="gray.600" fontSize={13} fontWeight={400} leftIcon={<FaRegHeart />} size="xs" variant="ghost">
                                        {popupInfo.likes}
                                    </Button>
                                    
                                    <Button color="gray.600" fontSize={13} fontWeight={400} leftIcon={<BiComment />} size="xs" variant="ghost">
                                        {popupInfo.comments}
                                    </Button>
                                </Box>
                            </Box>
                        </Box>


                        {/* <Box
                            p="1"
                            style={{ width: '200px', display: 'relative' }}>
                            <IconButton
                                style={{
                                    display: 'absolute',
                                    top: 0,
                                    right: 0,
                                }}
                                icon={<CloseIcon />}
                                size="xs"
                                variant="ghost"
                                onClick={() => setPopupInfo(null)}
                            />
                            <Image src="https://picsum.photos/300/200" />

                            <Heading size="xs">{popupInfo.title}</Heading>
                            <Text>{popupInfo.description}</Text>
                        </Box> */}
                    </Popup>
                )}
            </Map>
        </ChakraProvider>
    );
}

export default App;
