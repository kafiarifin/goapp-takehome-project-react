import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Radio,
    RadioGroup,
    Stack,
} from "@chakra-ui/react";

const ProductFilters = () => {
    return (
        <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        Kategori
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={8}>

                    <Button
                        colorScheme="primary"
                        borderRadius="8px"
                        variant="ghost"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="md"
                        w="100%"
                        textAlign="left"
                    >
                        Aksesoris
                    </Button>
                    <Button
                        colorScheme="primary"
                        borderRadius="8px"
                        variant="ghost"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="md"
                        w="100%"
                        textAlign="left"
                    >
                        Atasan
                    </Button>
                    <Button
                        colorScheme="primary"
                        borderRadius="8px"
                        variant="ghost"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="md"
                        w="100%"
                        textAlign="left"
                    >
                        Pakaian Dalam
                    </Button>
                    <Button
                        colorScheme="primary"
                        borderRadius="8px"
                        variant="ghost"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="md"
                        w="100%"
                        textAlign="left"
                    >
                        Outwear
                    </Button>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        Urutkan
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={8}>
                    <RadioGroup defaultValue="0">
                        <Stack>
                            <Radio size="md" name="1" value="1" colorScheme="primary">
                                Ulasan
                            </Radio>
                            <Radio size="md" name="2" value="2" colorScheme="primary">
                                Terbaru
                            </Radio>
                            <Radio size="md" name="3" value="3" colorScheme="primary">
                                Harga Terendah
                            </Radio>
                            <Radio size="md" name="4" value="4" colorScheme="primary">
                                Harga Tertinggi
                            </Radio>
                        </Stack>
                    </RadioGroup>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        Harga
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement children="Rp." />
                            <Input type="text" placeholder="Minimal" />
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement children="Rp." />
                            <Input type="text" placeholder="Maksimal" />
                        </InputGroup>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default ProductFilters;