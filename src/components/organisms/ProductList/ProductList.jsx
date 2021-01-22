import { Box, Stack, SimpleGrid } from "@chakra-ui/react"

import ProductCard from '../../molecules/ProductCard';
import ProductCardSkeleton from '../../molecules/ProductCard/fragments/ProductCardSkeleton';

import useProductList from './hooks/useProductList';

const ProductList = () => {
    const { fetchProduct, productData } = useProductList();

    console.log(productData, 'Product List');

    return (
        <Box p={6} direction={"row"} w="100%">
            <SimpleGrid
                columns={{ sm: 2, md: 4 }}
                spacing="4"
                rounded="lg"
                w="100%"
            >
                {fetchProduct
                    ? <><ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                    </>
                    : productData.map((data, index) => {
                        // console.log(fetchProduct, 'data');
                        return (
                            <ProductCard key={index} data={data} />
                        );
                    })
                }
            </SimpleGrid>
        </Box>
    )
}

export default ProductList;