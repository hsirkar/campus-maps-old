import { Box, Button, Checkbox, Divider, Heading, IconButton, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup, Stack } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { ChevronDownIcon, SearchIcon, StarIcon } from '@chakra-ui/icons'

function Nav({ data }) {
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
        </Box>
    );
}

export default Nav;