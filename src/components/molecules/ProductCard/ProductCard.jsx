import { Box, Image, Badge, Link, Skeleton, Text } from '@chakra-ui/react';
import t from 'typy';
import NumberFormat from 'react-number-format';

import StarIcon from '../../atoms/StarIcon';

const ProductCard = ({ props, data }) => {
    const property = {
        reviewCount: 34,
        rating: 4,
    }

    const productUid = t(data, 'uid').safeObject;
    const productKey = t(data, 'key').safeObject;
    const productName = t(data, 'name').safeObject;
    const productImage = t(data, 'primary_image_url').safeObject;
    const productPrice = t(data, 'original_price.price').safeObject;

    return (
        <Link href={"/product/" + productKey} style={{ textDecoration: "none" }}>
            <Box w="100%" h="100%" borderWidth="1px" borderRadius="xl" overflow="hidden" shadow="xl">
                <Image
                    w="100%"
                    h={250}
                    objectFit="cover"
                    src={productImage}
                    alt={productKey}
                />

                <Box p={3}>
                    <Box d="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="primary">
                            Trending
                        </Badge>
                    </Box>

                    <Box
                        d="flex"
                        mt="1"
                        as="p"
                        fontSize="sm"
                        lineHeight="tight"
                    >
                        <Text
                            noOfLines={2}
                            isTruncated >
                            {productName}
                        </Text>
                    </Box>

                    <Box
                        d="flex"
                        fontWeight="semibold"
                    >
                        {/* {productPrice} */}
                        <NumberFormat value={productPrice} displayType={'text'} decimalScale={0} thousandSeparator={true} prefix={'Rp. '} />
                    </Box>

                    <Box d="flex" mt="2" alignItems="center">
                        {Array(5)
                            .fill("")
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < property.rating ? "gold" : "gray"}
                                />
                            ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            {property.reviewCount} reviews
                            </Box>
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}

export default ProductCard;