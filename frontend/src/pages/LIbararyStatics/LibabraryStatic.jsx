import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { getAllBooks,getAllMessages } from '../../services/HallServices';
import {getAllUsers} from '../../services/UserServices';
  import { BsPerson } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  import React, { useState, useEffect } from "react";
  function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    const [property, setPropertity] = useState([]);
    const [property2, setPropertity2] = useState([]);
    const [Allusers, setAllUsers] = useState(0);


    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getAllBooks().then((res) => {
            setPropertity(res.data.book.slice());
        })
    }, [refresh]);
    useEffect(() => {
      getAllMessages().then((res) => {
        setPropertity2(res.data.article.slice());
      })
  }, [refresh]);

  useEffect(() => {
    getAllUsers().then((res) => {
      console.log(res)
      setAllUsers(res.users_total);
    })
}, [refresh]);
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} my={5} dir="rtl">
        <chakra.h1 
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
        الاحصائيات
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'المستخدمين'}
            stat={Allusers && Allusers}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'الكتب'}
            stat={property && property.length}
            icon={<FiServer size={'3em'} />}
          />
          <StatsCard
            title={'الرسايل'}
            stat={property2 && property2.length}
            icon={<GoLocation size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    );
  }