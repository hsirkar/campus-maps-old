import * as React from 'react';

import { Box, ChakraProvider, Grid, GridItem } from '@chakra-ui/react';

import theme from './theme';

import Header from './components/Header';
import Nav from './components/Nav';
import Map from './components/Map';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

dayjs.extend(relativeTime);


const firebaseConfig = {
    apiKey: "AIzaSyBNYzyZz9QTpTZpTWBYyA9YZVpKddYN5zs",
    authDomain: "campus-maps-53c7c.firebaseapp.com",
    projectId: "campus-maps-53c7c",
    storageBucket: "campus-maps-53c7c.appspot.com",
    messagingSenderId: "591540730553",
    appId: "1:591540730553:web:ca62a4bcf1d987ed753968",
    measurementId: "G-X0QNYZD797"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  

const MAPBOX_TOKEN =
    'pk.eyJ1IjoicmFrcmlzaCIsImEiOiJjamptczYxOGMzc3dzM3BvbDB0andscXdwIn0.GY-HcAV_MakM6gwzSS17Fg';

function App() {
    const mapRef = React.useRef();
    const [data, setData] = React.useState([]);
    const [selected, setSelected] = React.useState(-1);

    function fetchData() {
        fetch('https://localhost:3004/posts')
            .then(res => res.json())
            .then(json => {
                setData(json);
            });
    }

    React.useEffect(() => {
        fetchData();
        if (selected !== -1) {
            mapRef.current.easeTo({
                center: {
                    lon: data[selected].longitude,
                    lat: data[selected].latitude,
                },
            });
        }
    });

    return (
        <ChakraProvider theme={theme}>
            <Box
                position="absolute"
                left="0"
                right="0"
                top="0"
                bottom="0"
                overflow="hidden"
                zIndex="-9999">
                <Grid
                    templateAreas={`"header header"
                      "nav main"`}
                    gridTemplateRows={'50px 1fr'}
                    gridTemplateColumns={'max(340px, 20%) 1fr'}
                    height="100vh">
                    <GridItem area="header">
                        <Header />
                    </GridItem>
                    <GridItem area="nav">
                        <Nav
                            data={data}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </GridItem>
                    <GridItem area="main">
                        <Map
                            mapboxToken={MAPBOX_TOKEN}
                            data={data}
                            mapRef={mapRef}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </GridItem>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default App;
