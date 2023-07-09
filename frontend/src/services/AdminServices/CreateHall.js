import axios from "axios";

const token = localStorage.getItem("token");
const config = { headers: { BearerToken: token } };
console.log(config)
export const CreateAdminHall = async (data) => {
  console.log(data)
  return await axios.post(`http://localhost:5000/api/v1/hall/hall`, data, config);
};

export const CreateAdminBook = async (data) => {

  return await axios.post(`http://localhost:5000/api/v1/books`, data, config);
};

export const CreateAdminNews = async (data) => {

  return await axios.post(`http://localhost:5000/api/v1/news`, data, config);
};

export const CreateAdminArticle = async (data) => {

  return await axios.post(`http://localhost:5000/api/v1/articls`, data, config);
};
