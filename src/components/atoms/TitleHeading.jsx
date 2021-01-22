import { Box, Divider, Heading } from '@chakra-ui/react';

const TitleHeading = ({ title }) => {
    return (
        <Box
            p={6}
        >
            <Heading
                display="block"
                size="md"
                p={2}
                color="primary.800"
            >
                {title}
            </Heading>
            <Divider />
        </Box>
    )
}

export default TitleHeading;