import { Box, Icon, Image } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
import { RiMapPin3Fill } from 'react-icons/ri';

// TODO: combine SVGs using Inkspace or other similar tool
function Pin({ color, icon }) {
    return (
        <Box
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Icon
                fontSize="45"
                as={RiMapPin3Fill}
                color="white"
                position="absolute"
                filter="drop-shadow(0px 2px 3px rgb(0 0 0 / 0.6))" />
            <Icon
                fontSize="30"
                as={FaCircle}
                color={`${color}.200`}
                position="absolute"
                mb={1}
                ml={0.37} />

            {typeof icon === 'string' ?
                <Box position="absolute" boxSize={19}>
                    <Image src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f389.svg" />
                </Box>
                :
                <Icon
                    fontSize="25"
                    as={icon}
                    style={{ position: 'absolute', marginBottom: 5 }}
                    filter="drop-shadow(0px 0px 1px rgb(0 0 0 / 0.4))"
                />
            }
        </Box>
    );
}

export default Pin;
