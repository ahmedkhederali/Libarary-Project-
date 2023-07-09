import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Container,
    GridItem,
    Heading,
    Icon,
    Stack,
    Input,
    Select,
    Text,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import { SearchOff } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import WithSubnavigation from '../LibarayHeader/LibararyHeader';
import CaptionCarousel from '../LibararyCarasoul/LibararyCarasoul';
import LargeWithNewsletter from '../LibraryFooter/LibarayFooter';
import { getAllBooks } from '../../services/HallServices';

import LoadingPage from "../Loading/LoadingPage";
import BookModel from "../BookModel/BookModel";


const NewlyDepositedBooks = () => {
    const [property, setPropertity] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getAllBooks().then((res) => {
            setPropertity(res.data.book.slice(-6));
        })
    }, [refresh]);

    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack mb={5} spacing={4} as={Container} maxW={'3xl'} textAlign="center">
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        كتب أودعت حديثا
                    </Heading>

                </Stack>
                
                   {property &&  property.length === 0 ? (
                        <Box display="flex" justifyContent="center" minH={{ base: "60vh" }}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                mt={10}
                                p={3}
                            >
                                <Icon color="#314E89" fontSize={100} as={SearchOff} />
                                <Heading textAlign="center" fontSize={30} mt={8}>
                                    Sorry, we couldn't find what you are looking for.
                                </Heading>
                                <Text textAlign="center" fontSize={24} mt={2} fontWeight={300}>
                                    But don't give up! Check out our Book and find anyone for you!
                                </Text>

                            </Box>
                        </Box>
                    ) : (
                        <Wrap
                            alignSelf={{ base: "center", lg: "flex-start" }}
                            spacing="15px"
                            justify={{ base: "center", "2xl": "center" }}
                        >
                            {
                                property ?
                                    property?.map((item, index) => (
                                        <WrapItem key={index} dir="rtl" >
                                            <BookModel item={item} hallid={item._id} refresh={refresh} setRefresh={setRefresh} />
                                        </WrapItem>
                                    )) : (<LoadingPage />)
                            }
                        </Wrap>
                    )}
                   
                
            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default NewlyDepositedBooks;