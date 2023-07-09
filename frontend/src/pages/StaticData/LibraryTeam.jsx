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


const LibraryTeam = () => {
    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={25}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        فريق عمل المكتبة
                    </Heading>
                    <Heading fontSize={{ base: 'xl', sm: '2xl' }} fontWeight={'bold'} color={"#0D74FF"}>
                        أسماء العاملين بمكتبة الكلية ومسمياتهم الوظيفية والأعمال التى يقومون بها داخل المكتبة
                    </Heading>
                    <br />
                    <Heading fontSize={{ base: 'xl', sm: '2xl' }} fontWeight={'light'} mb={2} >
                        <ul>
                            <li>د/ شيماء محروس على بكر  ---  قائم بعمل مديرة المكتبة</li>
                            <br />
                            <li>أ/ مى عبدالله البتانونى  ---  أخصائى مكتبات</li>
                            <br />
                            <li>أ/ صفاء سعيد مصيلحى  ---  إدارى المكتبة</li>
                        </ul>
                    </Heading>
                </Stack>

            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default LibraryTeam;