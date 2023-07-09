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
import { getCommentByArticleId } from "../../services/commentServices";
import { getRatingByArticleId } from "../../services/ratingServices";
import StarRatings from "react-star-ratings";

export default function ArticleModel({ item, bookid, setRefresh, refresh }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [num_like, setNumLike] = useState(0);
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
    getCommentByArticleId(item._id)
      .then((result) => {
        setComments(result.comment);
      })
      .catch((err) => {
        console.log(err.message);
      });
      getRatingByArticleId(item._id).then((result) => {
      var star = 0;
      result.ratings.forEach((r) => {
        star += r.rating;
      });
      setRatings(star / result.ratings.length || 0);
      setRatingCount(result.ratings && result.ratings.length);
    });
    

  }, [item._id, status]);
 
  const handleClickFav=()=>{
    setIsFavorite(!isFavorite)
    setNumLike(num_like+1)
  }
  const onClickFavorite = async (ArticlrID) => {
    if (isFavorite) {
      await deleteFavorite(currentUser, ArticlrID);
      await deleteLike(ArticlrID);
      await setIsFavorite(false);
      await setRefresh(!refresh);
    } else {
      await addFavorite(currentUser, ArticlrID);
      await addLike(ArticlrID);
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
        src="https://mostaql.hsoubcdn.com/uploads/thumbnails/863843/62daadae269b6/90e118b0dfcc59de745073a74e51687d.jpg"
        alt={item.name}
      />
      <Box p="6">
        <Box display="flex" alignItems="baseline" mb={2}>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {item.date_of_publication.substring(0, 10)}
          </Badge>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {item.author}
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

        
       
        <Box display="flex" mb={2} alignItems="center" gap={5}>
          <Box as="span" color="gray.600" fontSize="sm">
            <StarRatings
              starDimension={"20"}
              starSpacing={"2"}
              rating={4}
              starRatedColor="#FFD700"
              numberOfStars={5}
              name="rating"
            />
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
                onClick={ handleClickFav}
              />
            ) : (
              <BsHeart
                cursor={"pointer"}
                onClick={handleClickFav}
                fontSize={"24px"}
              />
            )}
            <Box
              color={x}
              position={"absolute"}
              top={-1}
              right={num_like > 99 ? -8 : -3.5}
            >
              {1 > 500 ? "500+" : 5}{" "}
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
          <Link to={`/article/${item._id}`}>
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
