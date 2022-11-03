import * as React from 'react';

import { Box, ChakraProvider, Grid, GridItem } from '@chakra-ui/react';

import theme from './theme';

import Header from './components/Header';
import Nav from './components/Nav';
import Map from './components/Map';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const MAPBOX_TOKEN =
    'pk.eyJ1IjoicmFrcmlzaCIsImEiOiJjamptczYxOGMzc3dzM3BvbDB0andscXdwIn0.GY-HcAV_MakM6gwzSS17Fg';

function App() {
    const mapRef = React.useRef();
    const [data] = React.useState([]);
    const [selected, setSelected] = React.useState(-1);

    React.useEffect(() => {
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
