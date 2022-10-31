import { Box, Flex, Icon, Image, scaleFadeConfig } from '@chakra-ui/react';
import { FaCircle, FaUser } from 'react-icons/fa';
import { RiMapPin3Fill, RiMapPinFill } from 'react-icons/ri';

// TODO: combine SVGs using Inkspace or other similar tool
function Pin({ color, icon, selected, pin=true, ...rest }) {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            width="46px"
            height="46px"
            position="relative"
            transform={selected ? 'scale(1.25)' : 'none'}
            zIndex={selected ? "99" : "9"}
            {...rest}>
            {pin && <Icon
                position="absolute"
                top="0.5"
                color="white"
                fontSize="46"
                as={RiMapPinFill}
                filter="drop-shadow(0px 2px 3px rgb(0 0 0 / 0.2))"
            />}
            <Icon
                position="absolute"
                color={`${color}.200`}
                fontSize="28"
                as={FaCircle}
            />
            <Icon position="absolute" fontSize="20" as={icon} />
        </Flex>
    );
}

export default Pin;
