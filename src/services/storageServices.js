const STORAGE_KEY = "ANIME_HISTORY";

const isStorageExist = () => {
  if (typeof Storage === undefined) {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
};

const loadDataHistoriesFromStorage = () => {
  if (isStorageExist) {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    const dataHistories = JSON.parse(serializedData);
    
    if (dataHistories != null) {
      return dataHistories;
    }
  }
  return [];
};

const saveHistory = (animeData) => {

  if (!loadDataHistoriesFromStorage()) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([animeData]));
  } else {
    const currAnimeKeyword = animeData.animeTitle.toLowerCase();
    const currentDatas = loadDataHistoriesFromStorage();

    const filteredData = currentDatas.filter((currentData) => (currentData.animeTitle.toLowerCase().includes(currAnimeKeyword)));

    if (filteredData.length > 0) {
      Object.assign(filteredData[0], animeData);
    } else {
      currentDatas.push(animeData); 
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentDatas));
  }

};

const removeDataFromStorage = (titleAnime) => {
  const dataHistories = loadDataHistoriesFromStorage();

  let idxToRem;

  dataHistories.forEach((dataHistory, index) => {
    if (dataHistory.animeTitle.toLowerCase().includes(titleAnime.toLowerCase())) {
      idxToRem = index;
    }
  });

  dataHistories.splice(idxToRem, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataHistories));
};


export {
  saveHistory,
  loadDataHistoriesFromStorage,
  removeDataFromStorage,
};  