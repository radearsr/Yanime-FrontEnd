const BASE_URL = "http://47.254.251.95:5000";

const getAllAnime = async (setState) => {
  try{
    const response = await fetch(`${BASE_URL}/api/animes`);
    const results = await response.json();
    setState(results.data.animes);
  } catch(error) {
    console.log(error);
  }
};

const getAllAnimeByCategory = async (setState, category) => {
  try{
    const response = await fetch(`${BASE_URL}/api/animes?type=${category}&limit=10`);
    const results = await response.json();
    setState(results.data.animes);
  } catch(error) {
    console.log(error);
  }
};

const getAllAnimeBySearch = async (setState, query, page) => {
  try {
    const response = await fetch(`${BASE_URL}/api/animes/search?q=${query}&page=${page}&perpage=4`);
    const results = await response.json();
    setState(results.data.animes);
  } catch(error) {
    console.log(error);
  }
};

const getDetailAnime = async (setState, videoIdentity) => {
  try{
    const response = await fetch(`${BASE_URL}/api/animes/${videoIdentity}/details`);
    const results = await response.json();
    setState([results.data.details]);
    console.log([results.data.details]);
  } catch(error) {  
    console.log(error);
  }
};

export {
  BASE_URL,
  getAllAnime,
  getDetailAnime,
  getAllAnimeByCategory,
  getAllAnimeBySearch,
};