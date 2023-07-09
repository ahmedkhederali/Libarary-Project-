import React from 'react';
import "./style.css"
import CommonPage from "../CommonPage";
import CaptionCarousel from '../LibararyCarasoul/LibararyCarasoul';
import WithSubnavigation from '../LibarayHeader/LibararyHeader';
import SmallWithNavigation from '../LibararyTitle/LibararyTilte';
import LargeWithNewsletter from '../LibraryFooter/LibarayFooter';


import { Accordion, AccordionItem, Heading, Center, AccordionButton, AccordionPanel, Box, AccordionIcon } from "@chakra-ui/react";
const LibararyAccodring = () => {
    return (
        <>
            <SmallWithNavigation />
            <WithSubnavigation />
            <CaptionCarousel />
            <Center m={5}><Heading>الاسئلة المتكرره</Heading></Center>
            <div>

                <Accordion defaultIndex={[0]} m={"auto"} width="90%" mb={10}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='right'>
                                    ماهي الوثائق العامة المطلوبة للالتحاق ببرامج البكالوريوس؟
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='right'>
                            كشف علامات شهادة الثانوية العامة أو ما يعادلها مصدقة من وزارة التربية والتعليم أو صورة مصدقة عنها.
                            شهادة كفاءة اللغة الإنجليزية بمعدل 500 في TOFEL ITP أو 5 في IELTS على الأقل (يستثنى من ذلك البرامج التي تدرس باللغة العربية)
                            صورة عن جواز السفر.
                            3 صور شخصية.
                            صورة عن بطاقة الهوية.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='right'>
                                    ماهي الوثائق العامة المطلوبة للالتحاق في برامج الدراسات العليا؟
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='right'>
                            شهادة البكالوريوس أو ما يعادلها من جامعة معتمدة لدى وزارة التربية والتعليم –شؤون التعليم العالي في دولة الإمارات.
                            معادلة شهادة البكالوريوس من وزارة التربية والتعليم –شؤون التعليم العالي في دولة الإمارات إذا كانت الشهادة صادرة من خارج الدولة.
                            شهادة كفاءة اللغة الإنجليزية (TOFEL أو IELTS)، (حسب التخصص المطلوب).
                            كشف العلامات الأصلي، وإذا كان من خارج الدولة يجب تصديقه حسب الأصول.
                            صورة عن جواز السفر
                            صورة عن بطاقة الهوية الإماراتية
                            صورتان شخصيتان
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='right'>
                                    ماهي متطلبات القبول في برنامج الدبلوم المهني في التدريس؟
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='right'>
                            درجة البكالوريوس أو ما يعادلها في تخصص متصلّ من جامعة معتمدة من قبل وزارة التربية والتعليم – شؤون التعليم العالي في دولة الإمارات.
                            معدل تراكمي لا يقل عن 2 من 4 (تقدير مقبول) أو مايعادله على مستوى البكالوريوس.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='right'>
                                    ماهي شروط القبول للطلبة المنتقلون من مؤسسات تعليمية أخرى؟
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='right'>
                            أن تكون الجامعة أو الكلية السابقة معتمدة من وزارة التربية والتعليم – شؤون التعليم العالي في دولة الإمارات.
                            على الطالب أن يستوفي شروط القبول في الجامعة وشروط الكلية المراد الالتحاق بها.
                            أن يكون الطالب قد أنهى ما لا بقل عن 9 ساعات معتمدة في الجامعة أو الكلية السابقة.
                            على الطالب أن يكون منتظماً بالدراسة في الجامعة أو الكلية السابقة
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='right'>
                                    ما هو المعدل المطلوب لشهادة الكفاءة في اللغة الإنجليزية (IELTS / TOFEL) للالتحاق ببرامج البكالوريوس؟
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='right'>
                            لا تقل عن (500) في TOFEL ITP أو (61) في TOFEL iBT أو (173) في TOFEL CBT أو (5) في IELTS للراغبين بالالتحاق في:

                            كلية الهندسة.
                            كلية الصيدلة.
                            بكالوريوس التربية إعداد معلم اللغة الإنجليزية فقط.
                            كلية الأعمال.
                            لا تقل عن (450) في TOFEL ITP أو (4.5) في IELTS للراغبين بالالتحاق في:

                            كلية الاتصال والإعلام.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='right'>
                                    ما هو المعدل المطلوب لشهادة الكفاءة في اللغة الإنجليزية (IELTS / TOFEL) للالتحاق ببرامج الدراسات العليا؟
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='right'>
                            لا تقل عن (550) في TOFEL ITP أو (79) في TOFEL iBT أو (213) في TOFEL CBT أو (6) في IELTS للراغبين بالالتحاق في:

                            ماجستير الصيدلة السريرية
                            ماجستير الآداب في اللغة الإنجليزية لغير الناطقين بها TESOL
                            ماجستير إدارة الأعمال (إذا كانت شهادة البكالوريوس تدرس باللغة العربية)، أما في حال كانت شهادة البكالوريوس تدرس باللغة الإنجليزية فيشترط الحصول على معدل لا يقل عن (500) في TOFEL ITP أو (61) في TOFEL iBT أو (173) في TOFEL CBT أو (5) في IELTS.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='right'>
                                    Does the university provide any scholarships?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='right'>
                            نعم تقدم الجامعة منحاً دراسية متنوعة للطلبة، مثل:

                            خريجو الثانوية العامة الحاصلين على معدل 90% فما فوق.
                            منحة التفوق الأكاديمي.
                            منح للإخوة.
                            منح للطلبة الذين يفقدون المعيل خلال دراستهم الجامعية.
                            منح لأبناء العاملين في الجامعة من الكادر الأكاديمي والإداري باستثناء الطلبة الخريجين.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            <LargeWithNewsletter />
        </>
    );
}

export default LibararyAccodring;
