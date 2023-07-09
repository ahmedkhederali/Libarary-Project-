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

export default function Khadamat() {
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
                            25-11-2020
                        </Text>
                        <Heading>     خدمات المستفدين </Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            خدمات المستفدين
                        </Text>

                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src="https://1.bp.blogspot.com/-CZ8yjpOjdW0/YI_3twi_DdI/AAAAAAAABXw/wxz05EsLcwUcusyDm5Pa6PcqgLfv-I_9QCLcBGAsYHQ/s16000/%25D8%25A5%25D8%25AF%25D8%25A7%25D8%25B1%25D8%25A9%2B%25D8%25A7%25D9%2584%25D8%25AC%25D9%2588%25D8%25AF%25D8%25A9%2B%25D8%25A7%25D9%2584%25D8%25B4%25D8%25A7%25D9%2585%25D9%2584%25D8%25A9.webp"
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
            </Container>
            <LargeWithNewsletter />
        </>
    );
}