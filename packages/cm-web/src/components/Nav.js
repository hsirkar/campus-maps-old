import React from 'react';

import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    CloseButton,
    Divider,
    Flex,
    Heading,
    Menu,
    MenuButton,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    Text,
    Textarea,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';
import { AiOutlineUser } from 'react-icons/ai';
import { BiComment, BiShareAlt } from 'react-icons/bi';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FaHeart, FaRegHeart, FaSortAmountDown } from 'react-icons/fa';
import { HiReply } from 'react-icons/hi';
import { FiLayers } from 'react-icons/fi';

import { channels } from '../util';
import Pin from './Pin';
import Scrollbars from 'react-custom-scrollbars';

function Nav(props) {
    return (
        <Box
            position="relative"
            borderRight="1px"
            borderColor="gray.200"
            boxShadow="base"
            zIndex="999"
            background="white">
            <HomeNav {...props} visible={props.selected === -1} />
            {props.selected > -1 && <DetailView {...props} />}
        </Box>
    );
}

function DetailView({ data, selected, setSelected }) {
    const [liked, setLiked] = React.useState(false);
    const [textareaFocus, setTextareaFocus] = React.useState(false);

    if (selected === -1) return <Box p="4">Nothing selected</Box>;
    const d = data[selected];

    return (
        <Scrollbars style={{ height: 'calc(100vh - 50px)' }} autoHide>
            <Box p="4">
                <CloseButton
                    float="right"
                    ml={2}
                    onClick={() => setSelected(-1)}
                />
                <Heading fontSize="lg" mb={2}>
                    {d.title}
                </Heading>
                <Text color="gray.500" fontSize="sm">
                    {d.time.fromNow()}
                </Text>
                <ButtonGroup
                    spacing={1}
                    mt={2}
                    variant="ghost"
                    size="xs"
                    color="gray.600">
                    <Button
                        color={liked ? 'red.600' : 'gray.600'}
                        onClick={() => setLiked(!liked)}
                        fontWeight="400"
                        fontSize="0.85rem"
                        leftIcon={liked ? <FaHeart /> : <FaRegHeart />}>
                        {d.likes + (liked ? 1 : 0)}
                    </Button>
                    <Button
                        fontWeight="400"
                        fontSize="0.85rem"
                        leftIcon={<BiShareAlt />}>
                        Share
                    </Button>
                    <Button
                        color="red.600"
                        fontWeight={400}
                        fontSize="0.85rem"
                        leftIcon={<BsExclamationTriangle />}>
                        Report
                    </Button>
                </ButtonGroup>
                <Divider mt={3} />
                <Box as="h4" fontSize="md" fontWeight="bold" mt={3}>
                    Comments ({d.comments.length.toString()})
                </Box>

                <Box>
                    <Textarea
                        placeholder="Join the discussion..."
                        fontSize="sm"
                        mt={3}
                        resize="none"
                        rows={textareaFocus ? 4 : 1}
                        onFocus={() => setTextareaFocus(true)}
                        onBlur={() => setTextareaFocus(false)}
                    />
                    {d.comments.map((comment, i) => (
                        <Box
                            px="4"
                            py="3"
                            ml={0}
                            borderWidth="1px"
                            borderRadius="lg"
                            key={i}
                            mt={2}
                            fontSize="sm">
                            <Flex>
                                <Box>
                                    <Avatar
                                        size="sm"
                                        float="left"
                                        mr={3}
                                        bg="gray.400"
                                        icon={
                                            <AiOutlineUser fontSize="1.5rem" />
                                        }
                                    />
                                </Box>

                                <Box flex="1">
                                    {comment.text}

                                    <Box color="gray.500" fontSize={13} mt={1}>
                                        {comment.time.fromNow()}
                                    </Box>
                                </Box>
                            </Flex>

                            <ButtonGroup mt={2} size="xs">
                                <Button
                                    color={liked ? 'red.600' : 'gray.600'}
                                    fontSize="0.85rem"
                                    fontWeight={liked ? 600 : 400}
                                    leftIcon={
                                        liked ? <FaHeart /> : <FaRegHeart />
                                    }
                                    variant="ghost"
                                    onClick={() => setLiked(!liked)}>
                                    {comment.likes + (liked ? 1 : 0)}
                                </Button>
                                <Button
                                    color="gray.600"
                                    fontSize="0.85rem"
                                    fontWeight={400}
                                    leftIcon={<HiReply />}
                                    variant="ghost">
                                    Reply
                                </Button>
                                <Button
                                    color="red.600"
                                    fontSize="0.85rem"
                                    fontWeight={400}
                                    leftIcon={<BsExclamationTriangle />}
                                    variant="ghost">
                                    Report
                                </Button>
                            </ButtonGroup>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Scrollbars>
    );
}

function HomeNav({ data, setSelected, visible }) {
    return (
        <Scrollbars
            style={{
                height: 'calc(100vh - 50px)',
                display: visible ? 'inherit' : 'none',
            }}
            autoHide>
            <Box p="4">
                <Flex gap="2">
                    <Menu closeOnSelect={false}>
                        <MenuButton
                            as={Button}
                            textAlign="left"
                            size="sm"
                            fontWeight="400"
                            fontSize="0.85rem"
                            flex="1"
                            leftIcon={<FiLayers />}
                            rightIcon={<ChevronDownIcon />}>
                            Popular
                        </MenuButton>
                        <MenuList minWidth="260px" fontSize="0.85rem">
                            <MenuOptionGroup type="checkbox">
                                {[...new Set(data.map(d => d.channel))].map(
                                    (channel, i) => (
                                        <MenuItemOption key={i} value={i}>
                                            {channel}
                                        </MenuItemOption>
                                    )
                                )}
                            </MenuOptionGroup>
                        </MenuList>
                    </Menu>

                    <Menu closeOnSelect={true}>
                        <MenuButton
                            as={Button}
                            leftIcon={<FaSortAmountDown />}
                            size="sm"
                            fontWeight="400"
                            fontSize="0.85rem"
                            rightIcon={<ChevronDownIcon />}>
                            Trending
                        </MenuButton>
                        <MenuList minWidth="180px" fontSize="0.85rem">
                            <MenuOptionGroup
                                defaultValue="trending"
                                type="radio">
                                <MenuItemOption key="trending" value="trending">
                                    Trending
                                </MenuItemOption>
                                <MenuItemOption key="likes" value="likes">
                                    Likes
                                </MenuItemOption>
                                <MenuItemOption key="date" value="date">
                                    Recent
                                </MenuItemOption>
                            </MenuOptionGroup>
                        </MenuList>
                    </Menu>
                </Flex>

                <Heading pt={4} fontSize="0.75rem" color="teal">
                    {data.length} results
                </Heading>

                {data.map(d => (
                    <Box
                        key={d.id}
                        px="3"
                        py="3"
                        borderWidth="1px"
                        background="white"
                        borderRadius="md"
                        mt={3}>
                        <Box
                            width="50px"
                            height="50px"
                            display="inline-block"
                            float="left"
                            mr={1}>
                            <Pin
                                pin={false}
                                color={channels[d.channel].colorScheme}
                                icon={channels[d.channel].icon}
                                liked={false}
                                trending={d.trending}
                                unseen={!d.seen}
                                selected={false}
                                transform="scale(1.35)"
                            />
                        </Box>
                        {/* <HStack>
                        <Badge
                            colorScheme={channels[d.channel].colorScheme}
                            fontSize="0.7rem"
                            fontWeight="semibold">
                            {d.channel}
                        </Badge>
                    </HStack> */}
                        <Box
                            as="a"
                            href="#"
                            onClick={() => {
                                setSelected(d.id);
                            }}>
                            <Heading
                                noOfLines={2}
                                fontSize="sm"
                                fontWeight="semibold"
                                mb={1}
                                lineHeight="tight">
                                {d.title}
                            </Heading>
                            <Text lineHeight={1.45} noOfLines={3}>
                                {d.description}
                            </Text>
                        </Box>
                        <Text color="gray.500" fontSize="xs">
                            {d.time.fromNow()}
                            {/* {' '}by <Text as="span" fontWeight="semibold">{popupInfo.user}</Text> */}
                        </Text>
                        <ButtonGroup
                            spacing={1}
                            mt={3}
                            variant="ghost"
                            size="xs"
                            color="gray.600">
                            <Button
                                fontWeight="400"
                                fontSize="0.85rem"
                                leftIcon={<FaRegHeart />}>
                                {d.likes}
                            </Button>
                            <Button
                                fontWeight="400"
                                fontSize="0.85rem"
                                leftIcon={<BiComment />}>
                                {d.comments.length.toString()}
                            </Button>
                            <Button
                                fontWeight="400"
                                fontSize="0.85rem"
                                leftIcon={<BiShareAlt />}>
                                Share
                            </Button>
                        </ButtonGroup>
                    </Box>
                ))}
            </Box>
        </Scrollbars>
    );
}

export default Nav;
