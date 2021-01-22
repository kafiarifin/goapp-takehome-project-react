import { useState } from "react";
import { Box, Flex, Button, Skeleton, IconButton, Avatar, AvatarBadge } from "@chakra-ui/react";
import { FaShoppingBasket } from 'react-icons/fa';
import { ColorModeSwitcher } from '../../atoms/ColorModeSwitcher';
import Logo from "../../atoms/Logo";
import MenuItem from "../../atoms/MenuItem";
import MenuIcon from "../../atoms/MenuIcon";
import CloseIcon from "../../atoms/CloseIcon";

import useNavbar from './hooks/useNavbar';

const Header = ({ props }) => {
    const { fetchBusinessInfo, imageLogo, altLogo } = useNavbar();
    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow(!show);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            px={6}
            py={6}
            bg={["primary.700", "primary.700", "transparent", "transparent"]}
            color={["white", "white", "primary.800", "primary.800"]}
            {...props}
        >
            <Skeleton isLoaded={!fetchBusinessInfo}>
                <Flex align="center">
                    <Logo imageLogo={imageLogo} altLogo={altLogo} />
                </Flex>
            </Skeleton>

            <Flex align="center" justify="space-between">
                <Box display={{ base: "block", md: "none" }} >
                    <IconButton
                        size="md"
                        fontSize="lg"
                        variant="ghost"
                        color="current"
                        ml={{ base: "3", md: "3" }}
                        onClick={toggleMenu}
                        icon={show ? <CloseIcon /> : <MenuIcon />}
                        {...props}
                    />
                </Box>
                <Box display={{ base: "block", md: "none" }} >
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Box>
            </Flex>

            <Box
                display={{ base: show ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Flex
                    align="center"
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/catalog">Catalog </MenuItem>
                    <MenuItem to="/cart">
                        <IconButton
                            size="md"
                            fontSize="lg"
                            aria-label={`Cart`}
                            // variant="ghost"
                            color="current"
                            ml={{ base: "3", md: "3" }}
                            //   onClick={toggleColorMode}
                            icon={<FaShoppingBasket />}
                            {...props}
                        />
                    </MenuItem>
                    <MenuItem to="/login" isLast>
                        <Button
                            // colorScheme="primary"
                            color="current"
                            borderRadius="8px"
                            py="4"
                            px="4"
                            lineHeight="1"
                            size="md"
                        >
                            Login
                        </Button>
                    </MenuItem>

                    <Flex align="center" ml={3}>
                        <Avatar size="sm" name="Ryan Florence" src="https://bit.ly/ryan-florence">
                            <AvatarBadge boxSize="1.25em" bg="green.400" />
                        </Avatar>
                    </Flex>
                    <Box display={{ base: "none", md: "block" }}>
                        <ColorModeSwitcher justifySelf="flex-end" />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Header;