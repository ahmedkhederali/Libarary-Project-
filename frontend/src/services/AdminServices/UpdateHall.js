import axios from "axios";

const token = localStorage.getItem("token");
const config = { headers: { BearerToken: token } };

export const updateHallByIDS = async (id,
  name, namear, mohafza, capacity, price,
  mohafzaar, location, locationar, phone, chairs, tables,
  halltype, floor, facebook, instagram, messanger, whatsup, videoUrl,
) => {
  return await axios.put(`http://localhost:5000/api/v1/hall/hall/${id}`, {
    name, namear, mohafza, capacity, price, mohafzaar, location, locationar, phone, chairs, tables, halltype, floor, facebook, instagram, messanger, whatsup, videoUrl,
  }, config);
};

export const updateBookByID = async (id,
  name,
  author,
  publisher,
  date_of_publication,
  place_of_publication
) => {
  return await axios.put(`http://localhost:5000/api/v1/books/${id}`, {
    name,
    author,
    publisher,
    date_of_publication,
    place_of_publication
  }, config);
};

export const updateArticleByID = async (id,
  name,
  author,
  date_of_publication,

) => {
  return await axios.put(`http://localhost:5000/api/v1/articls/${id}`, {
    name,
    author,
    date_of_publication

  }, config);
};

export const updateNewsByID = async (id,
  new_name,
  description_new,
  date_of_new,
  image_new

) => {
  return await axios.put(`http://localhost:5000/api/v1/news/${id}`, {
    new_name,
    description_new,
    date_of_new,
    image_new

  }, config);
};