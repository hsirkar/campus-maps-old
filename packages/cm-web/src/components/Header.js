import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Button,
    Flex,
    Heading,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Spacer,
    Text,
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiCog, BiLogOut } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';

function Header() {
    return (
        <Flex
            height="100%"
            minWidth="max-content"
            alignItems="center"
            gap="2"
            px={8}
            borderBottom="1px"
            borderColor="gray.200"
            zIndex="9"
            boxShadow="base"
            position="relative"
            background="white">
            <Box>
                <Heading
                    as="span"
                    fontSize="1.15rem"
                    color="gray.600"
                    fontWeight="semibold"
                    letterSpacing="-0.45px">
                    campus-maps
                </Heading>
            </Box>
            <Spacer />
            <Text fontSize="sm" color="gray.600">
                University of Maryland, College Park
            </Text>
            <Spacer />

            {/* <Avatar
                size="sm"
                float="left"
                mr={3}
                bg="gray.400"
                icon={<AiOutlineUser fontSize="1.5rem" />}
            /> */}

            <Menu>
                <MenuButton
                    as={Button}
                    borderRadius="full"
                    variant="ghost"
                    px="1">
                    <Avatar
                        size="sm"
                        float="left"
                        bg="gray.400"
                        icon={<AiOutlineUser fontSize="1.5rem" />}
                    />
                </MenuButton>
                <MenuList fontSize="sm">
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Favorites</MenuItem>
                    <MenuItem>Help & support</MenuItem>
                    <MenuDivider />
                    <MenuItem>Log out</MenuItem>
                </MenuList>
            </Menu>

            {/* <ButtonGroup gap="0">
                <IconButton
                    icon={<BiBell />}
                    variant="ghost"
                    color="gray.500"
                    fontSize="xl"
                    borderRadius="full"
                />
                <IconButton
                    icon={<AiOutlineUser />}
                    variant="ghost"
                    color="gray.500"
                    fontSize="xl"
                    borderRadius="full"
                />
            </ButtonGroup> */}
        </Flex>
    );
}

export default Header;
