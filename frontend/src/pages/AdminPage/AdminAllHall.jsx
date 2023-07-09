import { DeleteIcon, EditIcon, Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdSearchOff } from "react-icons/md";
import { DeleteAdminHallByID ,DeleteAdminBookByID} from "../../services/AdminServices/DeleteHall";
import { getAdminAllHall } from "../../services/AdminServices/GetAllHall";
import CommonPage from "../CommonPage";
import AdminEditHall from "./AdminEditHall";
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import { useNavigate } from "react-router-dom";
import { getAllBooks, getAllMessages, getAllNews } from "../../services/HallServices";

const AdminAllHall = () => {
  const [book, setBooks] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [bookID, setBookID] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nagivate=useNavigate()
  const toast = useToast();
  useEffect(() => {
    getAllBooks()
      .then((res) => {
        console.log("ddd",res)
        setBooks(res.data.book);
      })
      .catch((err) => {
        toast({
          title: "Error!",
          description: `${err.message}`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  }, [refresh]);

  //Delete Hall
  const onClickDelete = (id) => {
    DeleteAdminBookByID(id)
      .then((res) => {
        toast({
          title: "Delete Book.",
          description: "You have Deleted Book",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setRefresh(!refresh);
      })
      .catch((err) => {
        toast({
          title: "Error!",
          description: `${err.message}`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };
  const onClickEdit = (id) => {
    setBookID(id);
    onOpen(true);
  };
  return (
    <>
      <CommonPage />
      <Box ml={{ base: 0, md: 60 }}>
        <Center>
          <Heading>All Book</Heading>
        </Center>
        <Box>
          {book.length > 0 ? (
            <Box>
              <TableContainer p={3}>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Image</Th>
                      <Th>Name</Th>
                      <Th>Author</Th>
                      <Th>Place Of Publication</Th>
                      <Th>Lang</Th>
                      <Th>Date of Publication</Th>
                      <Th>Publisher</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {book.map((bo) => {
                      return (
                        <Tr key={bo._id}>
                          <Td>
                            <Image
                              width={70}
                              height={70}
                              src={"https://nameswriter.com/write/files/521-%D8%A7%D8%B3%D9%85%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8.jpg"}
                            />
                          </Td>

                          <Td>{bo.name}</Td>
                          <Td>{bo.author}</Td>
                          <Td>{bo.place_of_publication}</Td>
                          <Td>{bo.lang}</Td>
                          <Td>{bo.date_of_publication}</Td>
                          <Td>{bo.publisher}</Td>
                          <Td>
                            <Button
                              onClick={() => onClickEdit(bo._id)}
                              mr={2}
                            >
                              <EditIcon />
                            </Button>
                            <Button
                            mr={2}
                              onClick={() =>
                                onClickDelete(
                                  bo._id,
                                  
                                )
                              }
                            >
                              <DeleteIcon />
                            </Button>
                       
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          ) : (
            <Box display="flex" justifyContent="center" minH={{ base: "60vh" }}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                mt={10}
                p={3}
              >
                <Icon color="#314E89" fontSize={100} as={MdSearchOff} />
                <Heading textAlign="center" fontSize={30} mt={8}>
                  Sorry, we couldn't find Any Book.
                </Heading>
                <Text textAlign="center" fontSize={24} mt={2} fontWeight={300}>
                  But don't give up! We Will added Alot Of Book Near
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      {bookID && <AdminEditHall isOpen={isOpen} onClose={onClose} bookID={bookID} refresh={refresh} setRefresh={setRefresh}/>}
    </>
  );
};

export default AdminAllHall;
