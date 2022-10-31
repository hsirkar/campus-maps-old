import * as React from 'react';

import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';

import theme from './theme';
import Map from './components/Map';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Header from './Header';
import Nav from './Nav';
import generateSampleData from './generateSampleData';
dayjs.extend(relativeTime);

const MAPBOX_TOKEN =
    'pk.eyJ1IjoicmFrcmlzaCIsImEiOiJjamptczYxOGMzc3dzM3BvbDB0andscXdwIn0.GY-HcAV_MakM6gwzSS17Fg';

function App() {
    const mapRef = React.useRef();
    const [data] = React.useState(generateSampleData(15));
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
            <Grid
                templateAreas={`"header header"
                  "nav main"`}
                gridTemplateRows={'50px 1fr'}
                gridTemplateColumns={'360px 1fr'}
                minHeight="100vh">
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
        </ChakraProvider>
    );
}

export default App;
