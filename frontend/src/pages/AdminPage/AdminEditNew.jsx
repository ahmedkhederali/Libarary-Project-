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
import { updateArticleByID, updateNewsByID } from "../../services/AdminServices/UpdateHall";

import React, { useEffect, useState } from "react";
import { MdLocationOn, MdOutlineHome } from "react-icons/md";
import LoadingPage from "../Loading/LoadingPage";
import { getBookByID, getArticleByID, getNewByID } from "../../services/HallServices";
const AdminEditNew = ({ isOpen, onClose, bookID, setRefresh, refresh }) => {
  const [new_name, setName] = useState("");
  const [description_new, setDesc] = useState("");
  const [date_of_new, setDateOfNew] = useState("");
  const [image_new, setImageNew] = useState("");
  const [book, setBooks] = useState([]);
  const toast = useToast();

  useEffect(() => {
    getNewByID(bookID)
      .then((res) => {
        setBooks(res.data.news)
        setName(res.data.news.new_name);
        setDesc(res.data.news.description_new);
        setDateOfNew(res.data.news.date_of_new);
        setImageNew(res.data.news.image_new)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateHall = () => {

    updateNewsByID(bookID,
      new_name,
      description_new,
      date_of_new,
      date_of_new,
      image_new
    )
      .then((res) => {
        toast({
          title: "Updated Success",
          description: "News Updated",
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
                {new_name.toUpperCase()}
              </Center>
            </DrawerHeader>

            {book ? (
              <DrawerBody>
                <Flex mt={2} flexDirection={{ base: "column", sm: "row" }} dir="rtl">
                  <FormControl mr="5%">
                    <FormLabel htmlFor="hall-name" fontWeight={"normal"}>
                      اسم الخبر
                    </FormLabel>
                    <InputGroup>

                      <Input
                        id="hall-name"
                        placeholder="New name"
                        name="new_name"
                        value={new_name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl mr="5%">
                    <FormLabel htmlFor="hall-name" fontWeight={"normal"}>
                      وصف الخبر
                    </FormLabel>
                    <InputGroup>

                      <Input
                        id="hall-name"
                        placeholder="Description New "
                        name="description_new"
                        value={description_new}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl mr="5%">
                    <FormLabel htmlFor="hall-name" fontWeight={"normal"}>
                      تاريخ الخبر
                    </FormLabel>
                    <InputGroup>

                      <Input
                        id="hall-name"
                        placeholder=" date_of_new "
                        name="date_of_new"
                        value={date_of_new}
                        onChange={(e) => setDateOfNew(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                </Flex>

                <Flex mt={2} flexDirection={{ base: "column", sm: "row" }} dir="rtl">
                  <FormControl mr="5%">
                    <FormLabel htmlFor="hall-name" fontWeight={"normal"}>
                     لينك الصوره
                    </FormLabel>
                    <InputGroup>

                      <Input
                        id="hall-name"
                        placeholder="Image URl"
                        name="image_new"
                        value={image_new}
                        onChange={(e) => setImageNew(e.target.value)}
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

export default AdminEditNew;
