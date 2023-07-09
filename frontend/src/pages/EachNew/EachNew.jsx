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
import { getNewByID } from '../../services/HallServices';

export default function SplitWithImage() {
    let { id } = useParams();
    const [news, setNews] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const colors2 = useColorModeValue('white', 'gray.800')
  
    useEffect(() => {
      getNewByID(id).then((res) => {
        setNews(res.data.news);
      })
    }, [refresh]);
    return (
        <>
            <SmallWithNavigation />
            <WithSubnavigation />
            <CaptionCarousel />
            <Container maxW={'5xl'} py={12} dir="rtl">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}>
                            {news.date_of_new}
                        </Text>
                        <Heading>{news.new_name}</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                        {news.new_name}
                        </Text>

                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={news.image_new}
                            
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
            </Container>
            <LargeWithNewsletter />
        </>
    );
}