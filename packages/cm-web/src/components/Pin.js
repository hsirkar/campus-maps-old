import { Flex, Icon } from '@chakra-ui/react';
import { FaCircle, FaHeart } from 'react-icons/fa';
import { RiMapPinFill } from 'react-icons/ri';

// TODO: combine SVGs using Inkspace or other similar tool
function Pin({
    color,
    icon,
    selected,
    pin = true,
    trending = true,
    liked = true,
    unseen = false,
    ...rest
}) {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            width="46px"
            height="46px"
            position="relative"
            transform={selected ? 'scale(1.25)' : 'none'}
            {...rest}>
            {pin && (
                <Icon
                    position="absolute"
                    top="0.5"
                    color="white"
                    fontSize="46"
                    as={RiMapPinFill}
                    filter="drop-shadow(0px 2px 3px rgb(0 0 0 / 0.2))"
                />
            )}
            <Icon
                position="absolute"
                color={`${color}.200`}
                fontSize="28"
                as={FaCircle}
            />
            <Icon position="absolute" fontSize="20" as={icon} />

            {liked && (
                <Icon
                    fontSize="13"
                    position="absolute"
                    right="1.5"
                    bottom="0.5"
                    color="red.500"
                    as={FaHeart}
                />
            )}

            {unseen && (
                <Icon
                    fontSize="10"
                    position="absolute"
                    left="1.5"
                    top="1.5"
                    color="blue.500"
                    as={FaCircle}
                />
            )}
        </Flex>
    );
}

export default Pin;
