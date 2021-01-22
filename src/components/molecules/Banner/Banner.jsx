import React from "react";
import PropTypes from "prop-types";
import {
    Box,
    Button,
    Flex,
    Image,
    Heading,
    Stack,
    Link,
    Skeleton,
} from "@chakra-ui/react";
import useBanner from "./hooks/useBanner";

export default function Banner({
    title,
    subtitle,
    image,
    ctaLink,
    ctaText,
    ...rest
}) {

    const { fetchBusinessInfo, imageLogo, storeName, storeBio } = useBanner();
    console.log(fetchBusinessInfo, "benner");

    return (
        <Box
            p={6}
            direction={"row"}
        >
            <Flex
                align="center"
                justify={{ base: "center", md: "space-around", xl: "space-between" }}
                direction={{ base: "column-reverse", md: "row" }}
                wrap="no-wrap"
                maxH="50vh"
                px={8}
                py={8}
                // mb={4}
                {...rest}
            >
                <Stack
                    spacing={4}
                    w={{ base: "80%", md: "40%" }}
                    align={["center", "center", "flex-start", "flex-start"]}
                >
                    <Skeleton isLoaded={!fetchBusinessInfo}>
                        <Heading
                            as="h1"
                            size="xl"
                            fontWeight="bold"
                            color="primary.800"
                            textAlign={["center", "center", "left", "left"]}
                        >
                            {storeName}
                        </Heading>
                    </Skeleton>
                    <Skeleton isLoaded={!fetchBusinessInfo}>
                        <Heading
                            as="h2"
                            size="md"
                            color="primary.800"
                            opacity="0.8"
                            fontWeight="normal"
                            lineHeight={1.5}
                            textAlign={["center", "center", "left", "left"]}
                        >
                            {subtitle}
                        </Heading>
                    </Skeleton>
                    <Skeleton isLoaded={!fetchBusinessInfo}>
                        <Link href={ctaLink}>
                            <Button
                                colorScheme="primary"
                                borderRadius="8px"
                                py="4"
                                px="4"
                                lineHeight="1"
                                size="md"
                            >
                                {ctaText}
                            </Button>
                        </Link>
                    </Skeleton>
                </Stack>
                <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }} borderRadius="3xl" bg={"transparent"}>
                    <Skeleton isLoaded={!fetchBusinessInfo}>
                        {/* TODO: Make this change every X secs */}
                        {/* <Image src={"/photo.jpg"} onLoad={handleLoaded} size="100%" rounded="1rem" shadow="2xl" /> */}
                        <Image src={imageLogo} size="100%" rounded="1rem" shadow="" />
                    </Skeleton>
                </Box>
            </Flex>
        </Box>
    );
}

Banner.propTypes = {
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string
};

Banner.defaultProps = {
    subtitle:
        "This is the subheader section where you describe the basic benefits of your product",
    image: "https://source.unsplash.com/collection/404339/800x600",
    ctaText: "Create your account now",
    ctaLink: "/signup"
};