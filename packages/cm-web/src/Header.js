import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Spacer,
    Text,
} from '@chakra-ui/react';

function Header() {
    return (
        <Flex
            height="100%"
            minWidth="max-content"
            alignItems="center"
            gap="2"
            px={8}
            borderBottom="1px"
            borderColor="gray.200">
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
            <Text fontSize="sm">University of Maryland, College Park</Text>
            <Spacer />
            <ButtonGroup gap="2">
                <Button size="sm" variant="link">
                    Sign Up
                </Button>
                <Button size="sm" variant="link">
                    Log In
                </Button>
            </ButtonGroup>
        </Flex>
    );
}

export default Header;
