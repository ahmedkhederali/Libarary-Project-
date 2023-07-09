import axios from "axios";

const token = localStorage.getItem("token");
const config = { headers: { BearerToken: token } };
console.log(config)
export const DeleteAdminHallByID = async (id,public_id) =>{
  
    return await axios.patch(`http://localhost:5000/api/v1/hall/hall/${id}`,{public_id},config);
  }; 

  export const DeleteAdminBookByID = async (id,) =>{
  
    return await axios.delete(`http://localhost:5000/api/v1/books/${id}`,config);
  }; 

  export const DeleteAdminArticleByID = async (id,) =>{
  
    return await axios.delete(`http://localhost:5000/api/v1/articls/${id}`,config);
  }; 

  export const DeleteAdminNewByID = async (id,) =>{
  
    return await axios.delete(`http://localhost:5000/api/v1/news/${id}`,config);
  }; 

  