import {
    Modal as ChakraModal,
    Button,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Box,
    Badge,
    Icon,
    Text,
    Divider,
    Avatar,
    Textarea,
} from '@chakra-ui/react';
import React from 'react';

import { BiComment, BiPencil, BiShareAlt } from 'react-icons/bi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { BsExclamationTriangle, BsReply } from 'react-icons/bs';

import { channelBadge, visibilityBadge } from './Popup';

function Modal({ isOpen, onClose, popupInfo }) {
    const [liked, setLiked] = React.useState(false);
    if (popupInfo == null) {
        return <div />;
    }

    return (
        <ChakraModal isOpen={isOpen} onClose={onClose} size="4xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader pb={0}>
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

                    <Text mt={1}>{popupInfo.title}</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody fontSize="sm">
                    {popupInfo.description && (
                        <Box mb={2}>{popupInfo.description}</Box>
                    )}

                    <Box
                        color="gray.500"
                        fontSize={13}
                        fontWeight="normal"
                        lineHeight="normal">
                        Posted {popupInfo.time.fromNow()}
                        {/* {' ' } by {' '}
                        <Text as="span" fontWeight="semibold">{popupInfo.user}</Text> */}
                    </Box>

                    <Box display="flex" mt={3} alignItems="center">
                        <Button
                            color={liked ? 'red.600' : 'gray.600'}
                            fontWeight={liked ? 600 : 400}
                            leftIcon={liked ? <FaHeart /> : <FaRegHeart />}
                            size="sm"
                            variant="ghost"
                            onClick={() => setLiked(!liked)}>
                            {popupInfo.likes + (liked ? 1 : 0)}
                        </Button>
                        <Button
                            color="gray.600"
                            fontWeight={400}
                            leftIcon={<BiComment />}
                            size="sm"
                            variant="ghost">
                            {popupInfo.comments.length.toString()}
                        </Button>
                        <Button
                            color="gray.600"
                            fontWeight={400}
                            leftIcon={<BiPencil />}
                            size="sm"
                            variant="ghost">
                            Edit
                        </Button>
                        <Button
                            color="gray.600"
                            fontWeight={400}
                            leftIcon={<BiShareAlt />}
                            size="sm"
                            variant="ghost">
                            Share
                        </Button>
                    </Box>

                    <Divider mt={4} />

                    <Box as="h4" fontSize="md" fontWeight="bold" mt={3}>
                        Comments ({popupInfo.comments.length.toString()})
                    </Box>

                    <Box>
                        <Textarea
                            placeholder="Join the discussion..."
                            fontSize="sm"
                            mt={3}
                            resize="none"
                        />
                        {popupInfo.comments.map((comment, i) => (
                            <Box
                                px="4"
                                py="3"
                                ml={0}
                                borderWidth="1px"
                                borderRadius="lg"
                                key={i}
                                mt={2}>
                                <Avatar
                                    float="left"
                                    mr={4}
                                    bg="gray.400"
                                    icon={<AiOutlineUser fontSize="1.5rem" />}
                                />

                                {comment.text}

                                <Box color="gray.500" fontSize={13} mt={1}>
                                    {comment.time.fromNow()}
                                </Box>

                                <Box display="flex" mt={3} alignItems="center">
                                    <Button
                                        color={liked ? 'red.600' : 'gray.600'}
                                        fontWeight={liked ? 600 : 400}
                                        leftIcon={
                                            liked ? <FaHeart /> : <FaRegHeart />
                                        }
                                        size="sm"
                                        variant="ghost"
                                        onClick={() => setLiked(!liked)}>
                                        {comment.likes + (liked ? 1 : 0)}
                                    </Button>
                                    <Button
                                        color="gray.600"
                                        fontWeight={400}
                                        leftIcon={<BsReply />}
                                        size="sm"
                                        variant="ghost">
                                        Reply
                                    </Button>
                                    <Button
                                        color="red.600"
                                        fontWeight={400}
                                        leftIcon={<BsExclamationTriangle />}
                                        size="sm"
                                        variant="ghost">
                                        Report
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </ModalBody>

                <ModalFooter />

                {/* <ModalFooter>
                    <Button size="sm" colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button size="sm" variant='ghost'>Secondary Action</Button>
                </ModalFooter> */}
            </ModalContent>
        </ChakraModal>
    );
}

export default Modal;
