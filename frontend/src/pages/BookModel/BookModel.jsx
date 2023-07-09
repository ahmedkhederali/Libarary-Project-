import { Icon, PhoneIcon, StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Spacer,
  Stack,
  useColorModeValue,
  Center
} from "@chakra-ui/react";
import { AiFillMoneyCollect, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Favorite, FavoriteBorder, LocationCity } from "@mui/icons-material";
import {
  addFavorite,
  deleteFavorite,
  deleteLike,
  addLike,
} from "../../services/UserServices";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PaidIcon from "@mui/icons-material/Paid";
import useGetFavoriteStatus from "../../Hooks/useGetFavoriteStatus";
import { getCommentByBookId } from "../../services/commentServices";
import { getRatingByBookId } from "../../services/ratingServices";
import StarRatings from "react-star-ratings";

export default function BookModel({ item, bookid, setRefresh, refresh }) {
 
  const [isFavorite, setIsFavorite] = useState(false);
  const currentUser = localStorage.getItem("currentuser");
  const [status] = useGetFavoriteStatus(currentUser, item._id);
  const [comments, setComments] = useState([]);
  const [ratings, setRatings] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  //  , Light mode , Dark mode
  const x = useColorModeValue("white.50", "white");

  useEffect(() => {
    if (item._id) {
      setIsFavorite(status);
    }
    getCommentByBookId(item._id)
      .then((result) => {
        setComments(result.comment);
      })
      .catch((err) => {
        console.log(err.message);
      });
    getRatingByBookId(item._id).then((result) => {
      var star = 0;
      result.ratings.forEach((r) => {
        star += r.rating;
      });
      setRatings(star / result.ratings.length || 0);
      setRatingCount(result.ratings && result.ratings.length);
    });
    

  }, [item._id, status]);

  const onClickFavorite = async (bookID) => {
    if (isFavorite) {
      await deleteFavorite(currentUser, bookID);
      await deleteLike(bookID);
      await setIsFavorite(false);
      await setRefresh(!refresh);
    } else {
      await addFavorite(currentUser, bookID);
      await addLike(bookID);
      await setIsFavorite(true);
      await setRefresh(!refresh);
    }
  };
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mx={2}
      key={item._id}
      dir="rtl"
    >
      <Image
        width="382px"
        height="255px"
        src="https://nameswriter.com/write/files/521-%D8%A7%D8%B3%D9%85%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8.jpg"
        alt={item.name}
      />
      <Box p="6">
        <Box display="flex" alignItems="baseline" mb={2}>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {item.place_of_publication}
          </Badge>
        </Box>
        <Center>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineheight="tight"
          noOfLines={1}
          mb={2}
        >
          {item.name.toUpperCase()}
        </Box>
        </Center>

        <Box
          fontWeight="light"
          as="h6"
          lineheight="tight"
          alignItems={"center"}
          mb={2}
        >
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <AddLocationIcon mt={2} fontSize="md" />
            <span lineheight={2}>{item.place_of_publication}</span>
          </Flex>
        </Box>
       
        <Box display="flex" mb={2} alignItems="center" gap={5}>
          <Box as="span" color="gray.600" fontSize="sm">
            <StarRatings
              starDimension={"20"}
              starSpacing={"2"}
              rating={ratings}
              starRatedColor="#FFD700"
              numberOfStars={5}
              name="rating"
            />
          </Box>
          <Box as="span" ml="2" color={x} fontSize="sm">
            {comments && comments.length} reviews
          </Box>
          <Box
            as="span"
            color="gray.600"
            fontSize="sm"
            mx={2}
            position="relative"
          >
            {isFavorite ? (
              <BsHeartFill
                fill="red"
                cursor={"pointer"}
                fontSize={"24px"}
                onClick={() => onClickFavorite(item._id)}
              />
            ) : (
              <BsHeart
                cursor={"pointer"}
                onClick={() => onClickFavorite(item._id)}
                fontSize={"24px"}
              />
            )}
            <Box
              color={x}
              position={"absolute"}
              top={-1}
              right={item.likes > 99 ? -8 : -3.5}
            >
              {item.likes > 500 ? "500+" : item.likes}{" "}
            </Box>
          </Box>
        </Box>

        <Stack
          width={"100%"}
          mt={2}
          direction={"row"}
          padding={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link to={`/books/${item._id}`}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              المزيد
            </Button>
          </Link>
          
        </Stack>
      </Box>
    </Box>
  );
}
