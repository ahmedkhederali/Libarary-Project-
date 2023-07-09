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
import { getArticleByID } from '../../services/HallServices';

export default function SplitWithImageMessages() {
    let { id } = useParams();
    const [book, setBook] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const colors2 = useColorModeValue('white', 'gray.800')
  
    useEffect(() => {
      getArticleByID(id).then((res) => {
        setBook(res.data.article);
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
                            {book.date_of_publication}
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
                            src="https://mostaql.hsoubcdn.com/uploads/thumbnails/863843/62daadae269b6/90e118b0dfcc59de745073a74e51687d.jpg"
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
            </Container>
            <LargeWithNewsletter />
        </>
    );
}