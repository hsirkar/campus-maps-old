import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import Map from './components/Map';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const MAPBOX_TOKEN =
    'pk.eyJ1IjoicmFrcmlzaCIsImEiOiJjamptczYxOGMzc3dzM3BvbDB0andscXdwIn0.GY-HcAV_MakM6gwzSS17Fg';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Map mapboxToken={MAPBOX_TOKEN} />
        </ChakraProvider>
    );
}

export default App;
