import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
} from 'react-icons/io5';
import LargeWithNewsletter from '../LibraryFooter/LibarayFooter';

import CaptionCarousel from '../LibararyCarasoul/LibararyCarasoul';
import WithSubnavigation from '../LibarayHeader/LibararyHeader';
import SmallWithNavigation from '../LibararyTitle/LibararyTilte';
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getBookByID } from '../../services/HallServices';

export default function SplitWithImageBook() {
    let { id } = useParams();
    const [book, setBook] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const colors2 = useColorModeValue('white', 'gray.800')
  
    useEffect(() => {
      getBookByID(id).then((res) => {
        setBook(res.data.book);
      })
    }, [refresh]);
    return (
        <>
            <SmallWithNavigation />
            <WithSubnavigation />
            <CaptionCarousel />
            <Container maxW={'5xl'} py={12} dir="rtl">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4} as={Flex}>
                        <Flex gap="10px">
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}>
                            {book.author}
                        </Text>
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}>
                            {book.place_of_publication}
                        </Text>
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}>
                            {book.lang}
                        </Text>
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}>
                            {book.publisher}
                        </Text>
                        </Flex>
                        <Heading>{book.name}</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                        الكتاب أحد أهم مؤلفات اللغوي البصري سيبويه ويعتبر أول كتاب منهجي ينسق قواعد اللغة العربية ويدونها . وقال عنه الجاحظ أنه «لم يكتب الناس في النحو كتاباً مثله». أُلِّفَ الكتاب في القرن الثاني للهجرة الموافق للثامن من الميلاد.
                        </Text>
                        <Text color={'gray.500'} fontSize={'lg'}>
                        الكتاب أحد أهم مؤلفات اللغوي البصري سيبويه ويعتبر أول كتاب منهجي ينسق قواعد اللغة العربية ويدونها . وقال عنه الجاحظ أنه «لم يكتب الناس في النحو كتاباً مثله». أُلِّفَ الكتاب في القرن الثاني للهجرة الموافق للثامن من الميلاد.
                        </Text>
                        <Text color={'gray.500'} fontSize={'lg'}>
                        الكتاب أحد أهم مؤلفات اللغوي البصري سيبويه ويعتبر أول كتاب منهجي ينسق قواعد اللغة العربية ويدونها . وقال عنه الجاحظ أنه «لم يكتب الناس في النحو كتاباً مثله». أُلِّفَ الكتاب في القرن الثاني للهجرة الموافق للثامن من الميلاد.
                        </Text>
                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src="https://nameswriter.com/write/files/521-%D8%A7%D8%B3%D9%85%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8.jpg"
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
            </Container>
            <LargeWithNewsletter />
        </>
    );
}