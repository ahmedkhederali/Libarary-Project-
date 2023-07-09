import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CommonPage from "../CommonPage";
import { PieChart } from "./PieChart";
import { getTypeHallNum } from "./../../services/AdminServices/HallTypeNum";
import { BiUserCircle } from "react-icons/bi";
import { BarChart } from "./../../Components/Chart2";
import { LineChart } from "./../../Components/LineChart";
import LoadingPage from "../Loading/LoadingPage";
import { BarChart2 } from "../../Components/Charts3";
import { getAllBooks, getAllMessages, getAllNews } from "../../services/HallServices";
import { getAllUsers } from "../../services/UserServices";
import CaptionCarousel from "../LibararyCarasoul/LibararyCarasoul";
import LargeWithNewsletter from "../LibraryFooter/LibarayFooter";

const AdminHome = () => {
  const bgd = useColorModeValue("blackAlpha.100", "whiteAlpha.300");

  const [opened, setOpened] = useState(0);
  const [closed, setClosed] = useState(0);
  const [allUser, setAllUser] = useState(0);
  const [allBook, setAllBook] = useState(0);
  const [allArticle, setAllArticle] = useState(0);
  const [allNews, setAllNews] = useState(0);


  useEffect(() => {
    getAllUsers().then((res) => {setAllUser(res.users_total)}).catch((err) => {console.log(err)})
    getAllMessages().then((res) => {setAllArticle(res.data.article_total)}).catch((err) => {console.log(err)})
    getAllBooks().then((res) => {setAllBook(res.data.books_total)}).catch((err) => {console.log(err)})
    getAllNews().then((res) => {setAllNews(res.data.news_total)}).catch((err) => {console.log(err)})
  }, []);
  return (
    <>
      <CommonPage />

      {allUser > 0 ? (
        <Box ml={{ base: 0, md: 60 }}>
          <Center mb={5}>
            <Heading fontSize={{ base: "20px", md: "25px", xl: "30px" }}>
              Admin Dashboard Page
            </Heading>
          </Center>
          <Flex
            mb={5}
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="center"
            textAlign={"center"}
          >
            <Box flex={1} ml={2} mr={2} mb={2} bg={bgd}>
              <Heading size="2xl"> Users</Heading>
              <Text fontSize="4xl">{allUser}</Text>
            </Box>
            
           
            <Box flex={1} bg={bgd} mr={2} mb={2}>
              <Heading size="2xl">Books</Heading>
              <Text fontSize="4xl">{allBook}</Text>
            </Box>
            <Box flex={1} bg={bgd} mr={2} mb={2}>
              <Heading size="2xl">News</Heading>
              <Text fontSize="4xl">{allNews}</Text>
            </Box>
            <Box flex={1} mr={2} mb={2} bg={bgd}>
              <Heading size="2xl"> Article</Heading>
              <Text fontSize="4xl">{allArticle}</Text>
            </Box>
          </Flex>
          
            <CaptionCarousel />
            <LargeWithNewsletter />

          
        </Box>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default AdminHome;
