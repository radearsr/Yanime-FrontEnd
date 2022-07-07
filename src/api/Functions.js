const BASE_URL = "https://first-server-uqgwz.run-us-west2.goorm.io";

const getAllAnime = async (setState) => {
  try{
    const response = await fetch(`${BASE_URL}/api/animes`);
    const results = await response.json();
    setState(results.data);
  } catch(error) {
    console.log(error);
  }
};

const getAllAnimeByCategory = async (setState, category) => {
  try{
    const response = await fetch(`${BASE_URL}/api/animes?category=${category}`);
    const results = await response.json();
    setState(results.data);
  } catch(error) {
    console.log(error);
  }
};

const getAllAnimeBySearch = async (setState, query) => {
  try {
    const response = await fetch(`${BASE_URL}/api/anime/search?query=${query}`);
    const results = await response.json();
    setState(results.data);
  } catch(error) {
    console.log(error);
  }
}

const getDetailAnime = async (setState, titleAnime) => {
  try{
    const response = await fetch(`${BASE_URL}/api/anime/${titleAnime}`);
    console.log((`${BASE_URL}/api/anime/${titleAnime}`));
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
  getAllAnimeBySearch,
};