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


const LibraryMessage = () => {
    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        رسالة المكتبة
                    </Heading>

                </Stack>
                <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={10}>
                    <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} color={"#0D74FF"}>
                        رسالة المكتبة
                    </Heading>
                    <p> تشجيع البحث العلمي من خلال توفير مصادر المعلومات الحديثة للمستفيدين لإنتاج المعرفة ونشرها ودعم عمليات التعليم والتعلم والعمل على تقديم الخدمات بجودة عالية</p>
                </Container>
            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default LibraryMessage;