import * as React from 'react';
import { Popup as ReactMapGLPopup } from 'react-map-gl';

import { Box, Button } from '@chakra-ui/react';

import { FaRegHeart } from 'react-icons/fa';
import { BiComment } from 'react-icons/bi';

function Popup({ popupInfo, setPopupInfo }) {
    return (
        <ReactMapGLPopup
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}>
            <Box>
                <Box>
                    <Box
                        mt={1}
                        mb={1}
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        noOfLines={2}
                        fontSize="md">
                        {popupInfo.title}
                    </Box>

                    <Box lineHeight={1.4} noOfLines={3} mb={1}>
                        {popupInfo.description}
                    </Box>

                    <Box color="gray.500">
                        {popupInfo.time.fromNow()} by {popupInfo.user}
                    </Box>

                    <Box display="flex" mt="2" alignItems="center">
                        <Button
                            color="gray.600"
                            fontSize={13}
                            fontWeight={400}
                            leftIcon={<FaRegHeart />}
                            size="xs"
                            variant="ghost">
                            {popupInfo.likes}
                        </Button>

                        <Button
                            color="gray.600"
                            fontSize={13}
                            fontWeight={400}
                            leftIcon={<BiComment />}
                            size="xs"
                            variant="ghost">
                            {popupInfo.comments}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ReactMapGLPopup>
    );
}

export default Popup;
