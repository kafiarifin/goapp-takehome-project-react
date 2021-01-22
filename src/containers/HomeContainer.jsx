import React from 'react';
import {
    Text,
    Link,
    VStack,
    Code,
    SimpleGrid,
    HStack,
} from '@chakra-ui/react';
import { Logo } from '../Logo';
import Banner from '../components/molecules/Banner';
import ProductTrend from '../components/organisms/ProductTrend';

export const HomeContainer = () => {
    return (
        <VStack spacing={8}>
            <Banner
                title="Build this rad landing page from scratch"
                subtitle="This is the subheader section where you describe the basic benefits of your product"
                image="https://source.unsplash.com/collection/404339/800x600"
                ctaText="Create your account now"
                ctaLink="/signup"
            />

            <ProductTrend />
        </VStack>
    );
}