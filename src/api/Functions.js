const BASE_URL = "http://localhost:5000";

const getAllAnime = async (setState) => {
  try{
    const response = await fetch(`${BASE_URL}/anime`);
    const results = await response.json();
    setState(results.data);
  } catch(error) {
    console.log(error);
  }
};

const getAllAnimeByCategory = async (setState, category) => {
  try{
    const response = await fetch(`${BASE_URL}/anime/category?name=${category}`);
    const results = await response.json();
    setState(results.data);
  } catch(error) {
    console.log(error);
  }
} 

const getDetailAnime = async (setState, titleAnime) => {
  try{
    const response = await fetch(`${BASE_URL}/anime/detail/${titleAnime}`);
    const results = await response.json();
    setState([results.data]);
  } catch(error) {  
    console.log(error);
  }
};

export {
  BASE_URL,
  getAllAnime,
  getDetailAnime,
  getAllAnimeByCategory,
};