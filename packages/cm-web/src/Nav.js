import { Badge, Box, Button, ButtonGroup, Checkbox, Divider, Flex, Heading, HStack, IconButton, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup, Stack, Tag, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { ChevronDownIcon, SearchIcon, StarIcon } from '@chakra-ui/icons'
import { FaHeart, FaRegHeart, FaSortAmountDown } from "react-icons/fa";
import { FiLayers } from 'react-icons/fi';
import { BiComment, BiShareAlt } from "react-icons/bi";
import { channels } from "./util";
import Pin from "./components/Pin";

function Nav(props) {
    return (
        <Box height="100%" p="4" borderRight="1px" borderColor="gray.200">
            {props.selected === -1 ? <HomeNav  {...props} /> : <DetailView {...props} />}
        </Box>
    );
}

function DetailView({ data, selected }) {
    return (
        <>
            <Heading fontSize="lg">{data[selected].title}</Heading>
        </>
    );
}

function HomeNav({ data, selected }) {

    return (
        <>
            {/* <InputGroup fontSize="sm">
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                />
                <Input fontSize="sm" placeholder="Search..." />
            </InputGroup> */}

            <Flex gap="2" >
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
                    <MenuList minWidth='260px' fontSize="0.85rem">
                        <MenuOptionGroup type='checkbox'>
                            {[...new Set(data.map(d => d.channel))].map((channel, i) =>
                                <MenuItemOption key={i} value={i}>{channel}</MenuItemOption>)}
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
                    <MenuList minWidth='180px' fontSize="0.85rem">
                        <MenuOptionGroup defaultValue="trending" type="radio">
                            <MenuItemOption key="trending" value="trending">Trending</MenuItemOption>
                            <MenuItemOption key="likes" value="likes">Likes</MenuItemOption>
                            <MenuItemOption key="date" value="date">Recent</MenuItemOption>
                        </MenuOptionGroup>
                    </MenuList>
                </Menu>
            </Flex>

            <Heading
                pt={4}
                fontSize="0.75rem"
                color="teal">
                {data.length} results
            </Heading>

            {data.map(d =>
                <Box key={d.id} px="4" py="3" borderWidth="1px" borderRadius="md" mt={3}>

                    <Box
                        width="30px"
                        height="30px"
                        display="inline-block"
                        float="left"
                        mr={4}
                        mt={6}>
                        <Pin color={channels[d.channel].colorScheme} icon={channels[d.channel].icon} selected={false} />
                    </Box>
                    {/* <HStack>
                        <Badge
                            colorScheme={channels[d.channel].colorScheme}
                            fontSize="0.7rem"
                            fontWeight="semibold">
                            {d.channel}
                        </Badge>
                    </HStack> */}
                    <Box as="a" href="#">
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
                            fontSize={13}
                            leftIcon={<FaRegHeart />}>
                            {d.likes}
                        </Button>
                        <Button
                            fontWeight="400"
                            fontSize={13}
                            leftIcon={<BiComment />}>
                            {d.comments.length.toString()}
                        </Button>
                        <Button
                            fontWeight="400"
                            fontSize={13}
                            leftIcon={<BiShareAlt />}>
                            Share
                        </Button>
                    </ButtonGroup>

                </Box>
            )}
        </>
    );
}

export default Nav;