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
        </Flex>
    );
}

export default Header;
