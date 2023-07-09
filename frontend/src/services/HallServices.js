import  axios  from 'axios';
const token = localStorage.getItem("token");
const config = { headers: { BearerToken: token } };

export const getAllHalls = async (mohafza,typeHall,nameHall,price) =>{
    return await axios.get(`http://localhost:5000/api/v1/hall?mohafza[regex]=${mohafza}&halltype[regex]=${typeHall}&name[regex]=${nameHall}&${price}`,config);
  };
  export const getAllHallsWithouFilteration = async () =>{
    return await axios.get(`http://localhost:5000/api/v1/hall/`,config);
  };
  export const getHallById = async (id) =>{
    return await axios.get(`http://localhost:5000/api/v1/hall/hall/${id}`,config);
  };
  export const getTrendHall = async () =>{
    return await axios.get(`http://localhost:5000/api/v1/hall/trend`,config);
  };
  export const getExploreHall = async () =>{
    return await axios.get(`http://localhost:5000/api/v1/hall/explore`,config);
  };
  export const updateHallRate = async (id,rate) =>{
    return await axios.patch(`http://localhost:5000/api/v1/hall/hallrateupdate/${id}`,{rate},config);
  };

  // libarary 
  export const getAllBooks = async () =>{
    return await axios.get(`http://localhost:5000/api/v1/books/`,config);
  };

    // libarary 
  export const getAllNews = async () =>{
    return await axios.get(`http://localhost:5000/api/v1/news/`,config);
  };
    // libarary 
    export const getAllMessages = async () =>{
      return await axios.get(`http://localhost:5000/api/v1/articls/`,config);
    };
    export const getNewByID = async (id) =>{
      return await axios.get(`http://localhost:5000/api/v1/news/${id}`,config);
    };
    export const getBookByID = async (id) =>{
      return await axios.get(`http://localhost:5000/api/v1/books/${id}`,config);
    };
    
    export const getArticleByID = async (id) =>{
      return await axios.get(`http://localhost:5000/api/v1/articls/${id}`,config);
    };
    