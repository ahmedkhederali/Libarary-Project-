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


const LibraryEntryInstructions = () => {
    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        تعليمات دخول المكتبة
                    </Heading>
                </Stack>
                <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={10}>
                    <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} mt={4} color={"#0D74FF"}>
                        يجب مراعاة التعليمات التالية عند دخول المكتبة
                    </Heading>
                    <ul>
                        <li>على السادة المترددين على المكتبة تسجيل أسمائهم في سجل المترددين مع تسليم كارنيه العام الحالي لمسئول المكتبة ( يسمح بالدخول بكارنيه العام السابق أو بطاقة الترشيح لمدة شهر واحد فقط من بداية العام الدراسي الحالي ) </li>
                        <li>يقتصر استخدام المكتبة على الاطلاع الداخلي في الكتب والمراجع الخاصة بالمكتبة </li>
                        <li>ممنوع منعاً باتاً دخول المكتبة بأي كتب دراسية </li>
                        <li>ممنوع توصيل أي Power Cable )  - Net Cable  ) لأجهزة الـ Lap Top  الخاصة بالطلبة في المكتبة ؛ وتستخدم أجهزة الـ Lap Top   الخاصة بالطلبة داخل المكتبة بشكل شخصي وفردي دون إحداث أي صوت بالمكتبة </li>
                        <li>يقتصر استخدام الانترنت للطلبة على الأجهزة الموجودة بالمكتبة </li>
                        <li>يجب وضع المتعلقات الشخصية بالمكان المخصص لذلك، مع عدم مسئولية المكتبة عن ضياع أي متعلقات شخصية </li>
                        <li>على المترددين عدم ترك متعلقاتهم الشخصية بالمكتبة أثناء عدم تواجدهم بها </li>
                        <li>يجب التزام الهدوء وعدم إصدار أي أصوات وغلق المحمول داخل المكتبة </li>
                        <li>ممنوع دخول المأكولات والمشروبات أو التدخين داخل المكتبة</li>
                        <li>يجب مراعاة النظام والتعامل مع أخصائي المكتبة لتسهيل عملية الوصول للأوعية المطلوبة </li>
                        <li>ممنوع استخدام أي Removable Media   خاصة بالطلبة على أجهزة الشبكة الموجودة بالمكتبة
                            ( Flash Memory – CD Rom – …etc )  </li>
                    </ul>
                    <br />
                    <br />
                    <div>*** للمكتبة الحق في حرمان الطلاب الغير ملتزمين بالتعليمات من دخول المكتبة والاستفادة من مقتنياتها *** </div>

                </Container>
            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default LibraryEntryInstructions;