import { Box, Stack, SimpleGrid } from "@chakra-ui/react"

import TitleText from '../../atoms/TitleHeading';
import ProductCard from '../../molecules/ProductCard';
import ProductCardSkeleton from '../../molecules/ProductCard/fragments/ProductCardSkeleton';

import useProductTrend from './hooks/useProductTrend';

const ProductTrend = () => {
    const { fetchProduct, productData } = useProductTrend();

    console.log(fetchProduct, 'Product Trend');

    return (
        <Box p={6} direction={"row"}>
            <TitleText title="Lagi trending nih!" />
            <Stack>

                <SimpleGrid
                    columns={{ sm: 2, md: 4, lg: 4 }}
                    spacing="4"
                    rounded="lg"
                    w="85vw"
                >
                    {fetchProduct
                        ? <><ProductCardSkeleton />
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                        </>
                        : productData.slice(0, 4).map((data, index) => {
                            console.log(fetchProduct, 'data');
                            return (
                                <ProductCard key={index} data={data} />
                            );
                        })
                    }
                </SimpleGrid>
            </Stack>
        </Box>
    )
}

export default ProductTrend;