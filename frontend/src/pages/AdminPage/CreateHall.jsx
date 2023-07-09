import { PhoneIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { People } from "@mui/icons-material";
import React, { useState } from "react";
import { FiDollarSign, FiUser } from "react-icons/fi";
import { FaChair, FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import { GiTable } from "react-icons/gi";

import { MdLocationOn, MdOutlineHome } from "react-icons/md";
import CommonPage from "../CommonPage";
import {
  AiOutlineInstagram,
  AiOutlineTable,
  AiOutlineVideoCameraAdd,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import ThreePlans from "./ThreePlans";
import { CreateAdminBook } from "./../../services/AdminServices/CreateHall";
import { useNavigate } from "react-router-dom";

const CreateHall = () => {
  const [allData, setAllData] = useState({});
  const [avatar, setAvatar] = useState("");
  const [slider, setSlider] = useState([]);
  const [imgSize, setImageSize] = useState(false);

  const toast = useToast();
  const nagivate = useNavigate();
  const [threeplan, setThreeplan] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAllData((prev) => ({ ...prev, [name]: value }));
  };

  //Handle Upload Images Poster
  const handleUpload = async (e) => {
    debugger
    const reader = new FileReader();
    
      reader.onload = async () => {
        if (reader.readyState === 2) {
          if (reader.result) {
            const x = reader.result;
            setAvatar(x);
          }
        }
      };
    
    if (e.target.files[0].size > 57614) {
      toast({
        title: "ERROR!",
        description: `Size of Image is To large`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      setImageSize(false);
      allData.hallimgposter = "";
    } else {
      setImageSize(true);
    }
    reader.readAsDataURL(e.target.files[0]);
  };
  const submit = () => {
    CreateAdminBook(allData)
      .then((res) => {
        toast({
          title: "Book Added",
          description: `${res.data.msg}`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        nagivate("/");
      })
      .catch((err) => {
        toast({
          title: "Error!",
          description: `${err.response.data.msg}`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };
  return (
    <>
      <CommonPage />
      <Box ml={{ base: 0, md: 60 }} p={2}>
        <Center mb={5}>
          <Heading fontSize={{ base: "20px", md: "25px", xl: "30px" }}>
            Create Book
          </Heading>
        </Center>

        <Flex mt={2} flexDirection={{ base: "column", sm: "row" }}>
          <FormControl mr="5%">
            <FormLabel htmlFor="hall-name" fontWeight={"normal"}>
              Book Name
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineHome color="gray.300" />}
              />
              <Input
                id="hall-name"
                placeholder="Book name"
                name="name"
                value={allData.name}
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
          </FormControl>

          <FormControl mr="5%">
            <FormLabel htmlFor="hall-namear" fontWeight={"normal"}>
              Author Name
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineHome color="gray.300" />}
              />
              <Input
                id="hall-namear"
                placeholder="author name  "
                name="author"
                value={allData.author}
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
          </FormControl>

          <FormControl mr="5%">
            <FormLabel htmlFor="hall-namear" fontWeight={"normal"}>
            Publisher Name
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineHome color="gray.300" />}
              />
              <Input
                id="hall-namear"
                placeholder="publisher name  "
                name="publisher"
                value={allData.publisher}
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
          </FormControl>
        </Flex>

        <Flex mt={2} flexDirection={{ base: "column", sm: "row" }}>
          <FormControl mr="5%">
            <FormLabel htmlFor="hall-name" fontWeight={"normal"}>
            Date of Publication
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineHome color="gray.300" />}
              />
              <Input
                id="hall-name"
                placeholder="Hall name"
                name="date_of_publication"
                type="date"
                value={allData.date_of_publication}
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
          </FormControl>

          <FormControl mr="5%">
            <FormLabel htmlFor="hall-namear" fontWeight={"normal"}>
            Place of publication
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineHome color="gray.300" />}
              />
              <Input
                id="hall-namear"
                placeholder="place of publication "
                name="place_of_publication"
                value={allData.place_of_publication}
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
          </FormControl>

          
        </Flex>
     

        <Box
          display={"flex"}
          justifyContent={{ base: "center", md: "end" }}
          mt={4}
        >
          <Button
            textAlign={"right"}
            colorScheme="teal"
            onClick={submit}
            variant="outline"
          >
            Added New Book
          </Button>
        </Box>
      </Box>

      
    </>
  );
};

export default CreateHall;
