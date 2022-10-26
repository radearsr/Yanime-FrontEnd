const STORAGE_KEY = "ANIME_HISTORY";

const isStorageExist = () => {
  if (typeof Storage === "undefined") {
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

const searchDataHistory = (identity) => {
  const histories = loadDataHistoriesFromStorage();
  const filteredHistory = histories.filter((history) => parseFloat(history.identity) === parseFloat(identity));
  if (filteredHistory.length > 0) {
    return filteredHistory;
  }
  return [];
}

const saveHistory = (animeData) => {
  if (!loadDataHistoriesFromStorage()) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([animeData]));
  } else {
    const currentDataIdentity =  animeData.identity;
    const dataIdentityFromStorage = loadDataHistoriesFromStorage();
    const filteredDataIdentityFromStorage = dataIdentityFromStorage.filter((data) => data.identity === currentDataIdentity);
    if (filteredDataIdentityFromStorage.length > 0) {
      Object.assign(filteredDataIdentityFromStorage[0], animeData);
    } else {
      dataIdentityFromStorage.push(animeData); 
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataIdentityFromStorage));
  }

};

const removeDataFromStorage = (identity) => {
  const dataHistories = loadDataHistoriesFromStorage();
  let idxToRem;
  dataHistories.forEach((dataHistory, index) => {
    if (dataHistory.identity === identity) {
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
  searchDataHistory,
};  