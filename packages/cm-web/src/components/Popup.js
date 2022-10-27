import * as React from 'react';
import { Popup as ReactMapGLPopup } from 'react-map-gl';

import { Badge, Box, Button, Icon } from '@chakra-ui/react';

import { FaRegHeart, FaHeart, FaUserFriends, FaUserCog } from 'react-icons/fa';
import { BiComment, BiShareAlt, BiWorld, BiPencil } from 'react-icons/bi';
import { FcBinoculars, FcLandscape, FcReading } from 'react-icons/fc';

export const channelBadge = {
    Landscapes: {
        icon: FcLandscape,
        colorScheme: 'teal',
    },
    Libraries: {
        icon: FcBinoculars,
        colorScheme: 'orange',
    },
    'Study spots': {
        icon: FcReading,
        colorScheme: 'blue',
    },
    Parties: {
        icon: `https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f389.svg`,
        colorScheme: 'purple',
    },
};

export const visibilityBadge = {
    Public: {
        icon: BiWorld,
        colorScheme: 'green',
    },
    Friends: {
        icon: FaUserFriends,
        colorScheme: 'teal',
    },
    'Friends of friends': {
        icon: FaUserCog,
        colorScheme: 'blue',
    },
    Custom: {
        icon: FaUserCog,
        colorScheme: 'cyan',
    },
};

function Popup({ popupInfo, setPopupInfo, onClick }) {
    const [liked, setLiked] = React.useState(false);

    return (
        <ReactMapGLPopup
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
            closeButton={false}
            offset={20}
            maxWidth="300px">
            <Box>
                <Box display="flex" gap={1.5}>
                    <Badge
                        colorScheme={
                            channelBadge[popupInfo.channel].colorScheme
                        }
                        fontSize={10}
                        variant="subtle">
                        <Icon
                            as={channelBadge[popupInfo.channel].icon}
                            mr={1}
                        />
                        {popupInfo.channel}
                    </Badge>
                    <Badge color="gray.600" fontSize={10} variant="subtle">
                        <Icon
                            as={visibilityBadge[popupInfo.visibility].icon}
                            mr={1}
                        />
                        {popupInfo.visibility}
                    </Badge>
                </Box>

                <Box as="a" href="#" onClick={onClick}>
                    <Box
                        mt={1.5}
                        mb={1}
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        noOfLines={2}
                        fontSize="md">
                        {popupInfo.title}
                    </Box>
                    <Box lineHeight={1.45} noOfLines={3} mb={1}>
                        {popupInfo.description}
                    </Box>
                </Box>

                <Box color="gray.500">
                    {popupInfo.time.fromNow()}
                    {/* {' '}by <Text as="span" fontWeight="semibold">{popupInfo.user}</Text> */}
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                    <Button
                        color={liked ? 'red.600' : 'gray.600'}
                        fontSize={13}
                        fontWeight={liked ? 600 : 400}
                        leftIcon={liked ? <FaHeart /> : <FaRegHeart />}
                        size="xs"
                        variant="ghost"
                        onClick={() => setLiked(!liked)}>
                        {popupInfo.likes + (liked ? 1 : 0)}
                    </Button>

                    <Button
                        color="gray.600"
                        fontSize={13}
                        fontWeight={400}
                        leftIcon={<BiComment />}
                        size="xs"
                        variant="ghost">
                        {popupInfo.comments.length.toString()}
                    </Button>

                    <Button
                        color="gray.600"
                        fontSize={13}
                        fontWeight={400}
                        leftIcon={<BiPencil />}
                        size="xs"
                        variant="ghost">
                        Edit
                    </Button>

                    <Button
                        color="gray.600"
                        fontSize={13}
                        fontWeight={400}
                        leftIcon={<BiShareAlt />}
                        size="xs"
                        variant="ghost">
                        Share
                    </Button>
                </Box>
            </Box>
        </ReactMapGLPopup>
    );
}

export default Popup;
