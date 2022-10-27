import { Badge, Box, Button, ButtonGroup, Checkbox, Divider, Heading, HStack, IconButton, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup, Stack, Tag, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { ChevronDownIcon, SearchIcon, StarIcon } from '@chakra-ui/icons'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BiComment, BiShareAlt } from "react-icons/bi";
import { channels } from "./util";
import Pin from "./components/Pin";

function Nav({ data, selected }) {
    return (
        <Box height="100%" p="4" borderRight="1px" borderColor="gray.200">
            {/* <InputGroup fontSize="sm">
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                />
                <Input fontSize="sm" placeholder="Search..." />
            </InputGroup> */}

            <Menu closeOnSelect={false}>
                <MenuButton
                    as={Button}
                    textAlign="left"
                    size="sm"
                    width="100%"
                    rightIcon={<ChevronDownIcon />}>
                    Popular
                </MenuButton>

                <MenuList minWidth='260px' fontSize="sm">
                    <MenuOptionGroup type='checkbox'>
                        {[...new Set(data.map(d => d.channel))].map((channel, i) =>
                            <MenuItemOption key={i} value={i}>{channel}</MenuItemOption>)}
                    </MenuOptionGroup>
                </MenuList>
            </Menu>

            <Heading
                pt={4}
                fontSize="0.75rem"
                textTransform="uppercase"
                color="teal">
                {data.length} results
            </Heading>

            {data.map(d =>
                <Box px="4" py="3" borderWidth="1px" borderRadius="md" mt={3}>

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
                            fontSize="md"
                            fontWeight="semibold"
                            mb={1}
                            lineHeight="tight">
                            {d.title}
                        </Heading>
                        <Text lineHeight={1.45} noOfLines={3} mb={1}>
                            {d.description}
                        </Text>
                    </Box>
                    <Text color="gray.500" fontSize="xs">
                        {d.time.fromNow()}
                        {/* {' '}by <Text as="span" fontWeight="semibold">{popupInfo.user}</Text> */}
                    </Text>
                    <ButtonGroup mt={3}>
                        <Button
                            leftIcon={<FaRegHeart />}
                            size="xs">
                            {d.likes}
                        </Button>
                        <Button
                            leftIcon={<BiComment />}
                            size="xs">
                            {d.comments.length.toString()}
                        </Button>
                        <Button
                            leftIcon={<BiShareAlt />}
                            size="xs">
                            Share
                        </Button>
                    </ButtonGroup>

                </Box>
            )}
        </Box>
    );
}

export default Nav;