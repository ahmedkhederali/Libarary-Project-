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


const PolicyOfDealingWithBooks = () => {
    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        سياسة التعامل بالمكتبة فى وقت الذروه
                    </Heading>

                </Stack>
                <Container maxW={'5xl'} mt={12} textAlign={"right"}>
                    <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={10}>
                        <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} mt={4} color={"#0D74FF"}>
                            : يتم التعامل مع المستفيدين من خلال
                        </Heading>
                        <ul>
                            <li>توفير كراسي من المعمل المقابل للمكتبة لكفاية العدد الداخل للمستفيدين مقارنة بالمتاح في وقت الذروة </li>
                            <li>اتخاذ اجراءات تجاه الطلبة الغير ملتزمين بتعليمات المكتبة</li>
                            <li>التنسيق مع مجتمع المستفيدين بخروجهم عند استيفاء متطلباتهم وانهائها من المكتبة</li>
                            <li>عمل مجموعات للمستفيدين من الطلبة أصحاب الهدف الواحد</li>
                            <li>عند التزاحم الشديد يتم إدخال مجموعة من الطلبة داخل قاعة الاطلاع</li>
                            <li>فتح الاستقبال للتساؤلات من خلال صفحة المكتبة على موقع التواصل الاجتماعي أو من خلال البريد الإلكتروني الرسمى للمكتبة

                                LibraryMenofia@Ci.Menofia.Edu.Eg أو من خلال Librarymenofia@Gmail.com</li>
                        </ul>
                    </Container>

                </Container>
            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default PolicyOfDealingWithBooks;