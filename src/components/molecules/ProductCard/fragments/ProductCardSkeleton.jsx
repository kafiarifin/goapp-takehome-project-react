import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const ProductCardSkeleton = ({ props }) => {

    return (
        <Box w="100%" h="100%" borderWidth="1px" borderRadius="xl" overflow="hidden" shadow="xl">
            <Skeleton w="100%" h={250} />
            <Box p={3}>
                <Box d="flex" alignItems="baseline">
                    <Skeleton borderRadius="full" h={5} w="40%" px={2} />
                </Box>
                <Box mt={2}>
                    <SkeletonText noOfLines={2} />
                </Box>
                <Box mt={2}>
                    <Skeleton w="80%" h={8} />
                </Box>
                <Box mt={2}>
                    <Skeleton w="70%" h={6} />
                </Box>
            </Box>
        </Box>
    )
}

export default ProductCardSkeleton;