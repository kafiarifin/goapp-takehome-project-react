import { Code, Link, Text, VStack } from "@chakra-ui/react"

export const LoginContainer = () => {
    return (
        <VStack spacing={8}>
            {/* <Logo h="40vmin" pointerEvents="none" /> */}
            <Text>
                Edit <Code fontSize="xl">src/HomeContainer.js</Code> and save to reload.
            </Text>
            <Link
                color="primary.800"
                href="https://chakra-ui.com"
                fontSize="2xl"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn Chakra
            </Link>
        </VStack>
    )
}