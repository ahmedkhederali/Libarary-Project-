import {
    Box,
    Container,
    Flex,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react';
import React from 'react';
import WithSubnavigation from '../LibarayHeader/LibararyHeader';
import CaptionCarousel from '../LibararyCarasoul/LibararyCarasoul';
import LargeWithNewsletter from '../LibraryFooter/LibarayFooter';
import { Image } from '@chakra-ui/react'

const PicturesLibrary = () => {
    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        مكتبة الصور
                    </Heading>

                </Stack>
                <Container as={Flex} maxW={'5xl'} mt={5} textAlign={"right"}>
                    <Box boxSize='sm'>
                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    </Box>
                    <Box boxSize='sm'>
                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    </Box>
                    <Box boxSize='sm'>
                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    </Box>
                </Container>
                <Container as={Flex} maxW={'5xl'} mt={1} textAlign={"right"}>
                    <Box boxSize='sm'>
                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    </Box>
                    <Box boxSize='sm'>
                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    </Box>
                    <Box boxSize='sm'>
                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    </Box>
                </Container>
            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default PicturesLibrary;