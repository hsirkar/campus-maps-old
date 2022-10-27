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
    const [data] = React.useState(generateSampleData(15));

    return (
        <ChakraProvider theme={theme}>
            <Grid
                templateAreas={`"header header"
                  "nav main"`}
                gridTemplateRows={'50px 1fr'}
                gridTemplateColumns={'340px 1fr'}
                minHeight="100vh">
                <GridItem area="header">
                    <Header />
                </GridItem>
                <GridItem area="nav">
                    <Nav data={data} />
                </GridItem>
                <GridItem area="main" >
                    <Map mapboxToken={MAPBOX_TOKEN} />
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
}

export default App;
