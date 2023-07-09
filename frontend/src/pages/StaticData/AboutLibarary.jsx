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


const AboutLibarary = () => {
    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        نبذه عن المكتبة
                    </Heading>

                </Stack>
                <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={10}>
                    <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} color={"#0D74FF"}>
                        نبذه عن المكتبة
                    </Heading>
                    <p>أنشئت مكتبة كلية الحاسبات و المعلومات عام 2002 كوحدة من الوحدات الهامة بكلية الحاسبات و المعلومات لتخدم السادة أعضاء هيئة التدريس والهيئة المعاونة وطلاب البكالوريوس وطلاب الدراسات العليا والعاملين بالكلية والكليات الموازية للتخصص العام بالحاسبات وتكنولوجيا المعلومات والذكاء الاصطناعي  وذلك لما تقتنيه من مصادر معلومات متعددة من كتب و مراجع و دوائر معارف بالإضافة الى الرسائل الجامعية و كذلك دورية علمية متخصصة فى مجال الحاسب الالى لذا فهى تلبى احتياجاتهم البحثية نظرا لتنوع مصادرها</p>

                    <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} mt={4} color={"#0D74FF"}>
                        محتويات المكتبة
                    </Heading>
                    <p>بلغت مقتنيات المكتية حتى نهاية العام الدراسي 2022/2023 الى 3104 كتاب و مرجع ، 189 رسالة جامعية ، 1 دورية علمية تغطى موضوعاتها مختلف الموضوعات الخاصة بالحاسب الآلي و علومه المختلفة</p>
                    <h1>القيم التى تسعى المكتبة لنشرها </h1>
                    <ul>
                        <li>الأمانة : العمل على حماية الملكية الفكرية</li>
                        <li>المعرفة : بالاسهام للوصول إلى مجتمع المعرفة</li>
                        <li>  الجودة : بتطبيق معايير الجودة في أداء المكتبة والخدمات فيها</li>
                        <li> التعاون : التواصل مع المكتبات ومراكز المعلومات الآخرى</li>
                        <li> التواصل : من خلال التواصل بين المستفيدين داخل المكتبة ببعضهم البعض وبالمجتمع الخارجى</li>
                        <li>البناء : يتم من خلال بناء ثقافة بناء شخصية علمية متمكنة للمستفيدين</li>
                    </ul>
                </Container>
            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default AboutLibarary;
