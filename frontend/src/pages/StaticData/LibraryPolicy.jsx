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
import { Accordion, AccordionItem, Center, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";



const LibraryPolicy = () => {
    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        سياسة المكتبة
                    </Heading>
                </Stack>
                <Accordion defaultIndex={[0]} m={"auto"} width="90%" mb={10} mt={10}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='right'>
                                    سياسة حقوق النشر
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='right'>
                            <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={5}>
                                <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} mt={4} color={"#0D74FF"}>
                                    المقدمة
                                </Heading>
                                <p>كمنظمة غير ربحية وأكاديمية ، فإن جامعة المنوفية تعزز المعرفة من خلال البحث ونشر المعرفة من خلال التدريس وتقديم الخدمات لمجتمعها لمواصلة التعلم. لذلك ، تم إجراء نسخ من مصادر المعلومات للمستفيدين باستخدام تحديد الهوية الجامعية يكون للاستخدام العادل ولأغراض غير تجارية. تحتوي مجموعات المكتبة على مواد علمية مخصصة للمجتمع الأكاديمي ، وبالتالي فهي ذات طبيعة أكثر ملاءمة لمطالبات الاستخدام العادل</p>
                            </Container>
                            <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={5}>
                                <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} mt={4} color={"#0D74FF"}>
                                    خدمات النسخ
                                </Heading>
                                <p>تقع على عاتق مكتبات جامعة المنوفية مسؤولية مراجعة جميع طلبات النسخ للامتثال لحقوق النشر قبل تقديم المواد إلى مركز التصوير. لذلك ، يُفترض أن طلبات المكتبات التي يتلقاها مركز النسخ متوافقة مع سياسة حقوق النشر الخاصة بالمكتبات وسيتم تلبيتها وفقًا لذلك</p>
                                <br />
                                <h1>سينظر موظفو مركز التصوير في طلبات مستفيدي جامعة العين بشأن النسخ على أنها استخدام عادل ، بشرط استيفاء المعايير التالية</h1>
                                <ul>
                                    <li>الاستخدام أكاديمي بطبيعته ، لأغراض تعليمية غير هادفة للربح</li>
                                    <li>الغرض هو إتاحة المواد للدراسة حسب رغبة المستفيد</li>
                                    <li>الطلب هو نسخة واحدة من أصل واحد ، بدلاً من نسخ متعددة من نفس الأصل</li>
                                </ul>
                            </Container>
                            <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={5}>
                                <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} mt={4} color={"#0D74FF"}>
                                    الاستعارة بين المكتبات
                                </Heading>
                                <p>تسعى مكتبات جامعة المنوفية إلى توفير أقصى قدر من المشاركة في عملية الإعارة بين المكتبات لكل من مستخدمي جامعة المنوفية وللمكتبات الأخرى التي تطلب منا توفير مواد لملء طلبات مستخدميها. في الوقت نفسه ، تحاول المكتبات اتباع الإرشادات كما هو مذكور في قانون حقوق النشر المصري</p>
                            </Container>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='right'>
                                    سياسة الإعارة في المكتبة
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='right'>
                            <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={10}>
                                <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} mt={4} color={"#0D74FF"}>
                                    الهدف
                                </Heading>
                                <p>توفير أعلى معايير مصادر وضمان الجودة لدعم البرامج الأكاديمية والبحث العلمي في الجامعة</p>
                            </Container>
                            <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={10}>
                                <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} mt={4} color={"#0D74FF"}>
                                    النطاق
                                </Heading>
                                <p>تنطبق هذه السياسة على جميع مستخدمي مكتبة كليه الحاسبات والمعلومات جامعه المنوفية في محافظه المنوفية </p>
                            </Container>
                            <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={10}>
                                <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} mt={4} color={"#0D74FF"}>
                                    المواد المفقودة والتالفة
                                </Heading>
                                <p>في حالة فقد أو تلف المواد المستعارة ، يجب على المستفيد إبلاغ المكتبة في أسرع وقت ممكن. وفقًا لذلك ، سيكون على المستفيد</p>
                                <ul>
                                    <li>دفع السعر المزدوج للمواد المفقودة أو التالفة أو إحضار نسخة بديلة من نفس المادة</li>
                                    <li>دفع أي غرامات أو رسوم أخرى لإعادة تجديد العضوية</li>
                                </ul>
                            </Container>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='right'>
                                    سياسة استخدام المكتبة الإلكترونية
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='right'>
                            <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={10}>
                                <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} mt={4} color={"#0D74FF"}>
                                    الهدف
                                </Heading>
                                <p>تهدف سياسة استخدام المكتبات الإلكترونية إلى تحديد حقوق وواجبات المستخدمين لحماية الموارد والمواد الإلكترونية التي توفرها مكتبات جامعة المنوفية</p>
                            </Container>
                            <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={10}>
                                <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} mt={4} color={"#0D74FF"}>
                                    النطاق
                                </Heading>
                                <p>تنطبق هذه السياسة على أعضاء هيئة التدريس والطلبة والموظفين الإداريين في جامعة المنوفية</p>
                            </Container>
                            <Container maxW={'5xl'} mt={12} textAlign={"right"} mb={10}>
                                <Heading fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'light'} mb={2} mt={4} color={"#0D74FF"}>
                                    إفادة
                                </Heading>
                                <p>معظم المصادر الإلكترونية التي تقدمها مكتبة جامعة المنوفية يمكن الوصول إليها واستخدامها في الحرم الجامعي وكذلك خارج الحرم الجامعي. ومع ذلك ، قد يقتصر استخدام الحرم الجامعي على المستخدمين المصرح لهم فقط. يخضع الوصول إلى مصادر  المكتبة الإلكترونية لجامعة المنوفية واستخدامها حسب إتفاقيات الترخيص المبرمة بين الجامعة ومقدمي الخدمات. يجب على أعضاء هيئة التدريس والطلبة والموظفين الإداريين في جامعة المنوفية الالتزام بشروط الاتفاقية الموقعة بين الجامعة ومقدمي الخدمات</p>
                            </Container>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default LibraryPolicy;
