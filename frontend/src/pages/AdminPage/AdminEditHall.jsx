import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,

  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdLocationOn, MdOutlineHome } from "react-icons/md";
import LoadingPage from "../Loading/LoadingPage";
import { getBookByID, getHallById } from "./../../services/HallServices";
import { updateBookByID } from "../../services/AdminServices/UpdateHall";
const AdminEditHall = ({ isOpen, onClose, bookID,setRefresh,refresh }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [date_of_publication, setDateofPublication] = useState("");
  const [place_of_publication, setPlace_of_publication] = useState("");
  const [book, setBooks] = useState([]);
  const toast = useToast();

  useEffect(() => {
    getBookByID(bookID)
      .then((res) => {
        setBooks(res.data.book)
        setName(res.data.book.name);
        setAuthor(res.data.book.author);
        setPublisher(res.data.book.publisher);
        setDateofPublication(res.data.book.date_of_publication);
        setPlace_of_publication(res.data.book.place_of_publication);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateHall = () => {
   
    updateBookByID(bookID,
      name,
      author,
      publisher,
      date_of_publication,
      place_of_publication
     )
      .then((res) => {
        toast({
          title: "Updated Success",
          description: "Book Updated",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setRefresh(!refresh)
        onClose();
      })
      .catch((err) => {
        toast({
          title: "Error!",
          description: `${err.msg}`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };
  return (
    <>
      {book && (
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          size={"full"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Center fontSize={25} fontWeight="bold">
                 {name.toUpperCase()}
              </Center>
            </DrawerHeader>

            {book ? (
              <DrawerBody>
                <Flex mt={2} flexDirection={{ base: "column", sm: "row" }} dir="rtl">
                  <FormControl mr="5%">
                    <FormLabel htmlFor="hall-name" fontWeight={"normal"}>
                    اسم الكتاب
                    </FormLabel>
                    <InputGroup>
                      
                      <Input
                        id="hall-name"
                        placeholder="Hall name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl mr="5%">
                    <FormLabel htmlFor="hall-name" fontWeight={"normal"}>
                    اسم المؤلف
                    </FormLabel>
                    <InputGroup>
                      
                      <Input
                        id="hall-name"
                        placeholder="Author name"
                        name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl mr="5%">
                    <FormLabel htmlFor="hall-name" fontWeight={"normal"}>
                    اسم الناشر
                    </FormLabel>
                    <InputGroup>
                      
                      <Input
                        id="hall-name"
                        placeholder="publisher name"
                        name="publisher"
                        value={publisher}
                        onChange={(e) => setPublisher(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                </Flex>

                <Flex mt={4} flexDirection={{ base: "column", sm: "row" }} dir="rtl">
                  <FormControl mr="5%">
                    <FormLabel htmlFor="hall-name" fontWeight={"normal"}>
                    تاريخ النشر 
                    </FormLabel>
                    <InputGroup>
                      
                      <Input
                        id="hall-name"
                        placeholder=" Date of publication "
                        name="date_of_publication"
                        value={date_of_publication.substring(0,10)}
                        onChange={(e) => setDateofPublication(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl mr="5%">
                    <FormLabel htmlFor="hall-name" fontWeight={"normal"}>
                   مكان النشر
                    </FormLabel>
                    <InputGroup>
                      
                      <Input
                        id="hall-name"
                        placeholder="place of publication "
                        name="place_of_publication"
                        value={place_of_publication}
                        onChange={(e) => setPlace_of_publication(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                  
                </Flex>
              </DrawerBody>
            ) : (
              <LoadingPage />
            )}

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={updateHall}>
                Update
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default AdminEditHall;
