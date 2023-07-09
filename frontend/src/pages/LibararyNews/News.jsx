import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Container,
  Heading,
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import React, { useState, useEffect } from "react";
import { getAllNews } from '../../services/HallServices';






function ProductAddToCart() {
  const [property, setPropertity] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const colors2 = useColorModeValue('white', 'gray.800')

  useEffect(() => {
    getAllNews().then((res) => {
      setPropertity(res.data.news);
    })
  }, [refresh]);
  return (

    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}> الاخبار </Heading>
      </Stack>

      <Flex p={50} w="full" alignItems="center" justifyContent="center" flexWrap="wrap" gap="10px">


        {
          property && property?.map((item) => (
            <Link to={`/new/${item._id}`}
              style={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}>
              <Box
                cursor="pointer"
                bg={colors2}
                maxW="sm"

                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                w={384}
                h={412}
              >


                <Image
                  w={"full"}
                  h={200}
                  src={item.image_new}
                  alt={`${item.image_new}`}
                  roundedTop="lg"
                />

                <Box p="6">
                  <Box
                    fontSize="xl"
                    fontWeight="light"
                    as="h6"
                    lineHeight="tight"
                    textAlign="right"
                    isTruncated>
                    {"تم النشر " + item.date_of_new}
                  </Box>
                  <Flex mt="1" justifyContent="space-between" alignContent="center">
                    <Box
                      fontSize="xl"
                      fontWeight="semibold"
                      as="h6"
                      lineHeight="tight"
                      textAlign="right"
                      isTruncated>
                      {item.new_name}
                    </Box>

                  </Flex>


                </Box>
              </Box>
            </Link>
          ))
        }

      </Flex>
    </Box>


  );
}

export default ProductAddToCart;