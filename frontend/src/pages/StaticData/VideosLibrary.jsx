import {
    Box,
    Container,
    Flex,
    Heading,
    Stack,
    Text,
    Image,
    
} from '@chakra-ui/react';
import { AspectRatio } from '@chakra-ui/react'
import React from 'react';
import WithSubnavigation from '../LibarayHeader/LibararyHeader';
import CaptionCarousel from '../LibararyCarasoul/LibararyCarasoul';
import LargeWithNewsletter from '../LibraryFooter/LibarayFooter';
function VideoPlayer() {
    return (
      <Box maxW="560px" mx="auto" mb={6}>
        <AspectRatio ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    );
  }

const VideosLibrary = () => {
    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        مكتبة الفيديو
                    </Heading>

                </Stack>
                <Container maxW={'5xl'} mt={5} textAlign={"right"} w={500} h={500}>
                <AspectRatio ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>

                </Container>
            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default VideosLibrary;