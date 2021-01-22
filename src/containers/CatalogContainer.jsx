import React from 'react';
import { VStack, Grid, GridItem, Wrap, Box, Text } from '@chakra-ui/react';

import ProductList from '../components/organisms/ProductList';
import ProductFilters from '../components/organisms/ProductFilters';

export const CatalogContainer = () => {
    return (
        <VStack spacing={8}>
            <Grid
                h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={2}
            >
                <GridItem rowSpan={1} colSpan={1} pl={4}>
                    <Box mt={5} w="100%" minH="100vh" borderWidth="1px" borderRadius="xl" overflow="hidden" shadow="xl">
                        <ProductFilters />
                    </Box>
                </GridItem>
                <GridItem colSpan={4}>
                    <Wrap>
                        <ProductList />
                    </Wrap>
                </GridItem>
            </Grid>
        </VStack>
    )
}