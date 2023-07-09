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


const LibararyVision = () => {
    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        رؤيه المكتبة
                    </Heading>

                </Stack>
                <Container maxW={'3xl'} mt={12} textAlign={"right"} mb={10}>
                    <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} color={"#0D74FF"}>
                        رؤيه المكتبة
                    </Heading>
                    <p>رؤية المكتبة
                        الريادة والابداع والابتكار فى تقديم خدمات ومصادر المعلومات للمستفيدين لتصبح المكتبة مركزا متطورا لنشر المعلومات والمعرفة وتحقيق أهداف الكلية التعليمية والبحثية والمجتمعية</p>
                </Container>
            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default LibararyVision;