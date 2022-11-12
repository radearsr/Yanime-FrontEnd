import React, { useEffect, useState } from "react";
import SearchHeader from "./SearchHeader";
import ResultList from "./ResultList";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../api/Functions"
import SkeletonListSearch from "./SkeletonListSearch";

const Search = () => {

  const [animes, setAnimes] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q");

  useEffect(() => {
    fetch(`${BASE_URL}/api/animes/search?q=${keyword}&page=${page}&perpage=8`)
    .then((response) => response.json())
    .then((result) => {
      setIsLoading(false);
      console.log(result);
      return setAnimes((prev) => [...prev, ...result.data.animes])
    })
    .catch((error) => console.error(error));
  }, [keyword, page]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const totalScrollHeight = window.document.documentElement.scrollHeight;
      const scrollFromTop = window.document.documentElement.scrollTop;
      const height = window.innerHeight;

      if (scrollFromTop + height + 1 >= totalScrollHeight) {
        setPage(page + 1);
      }
    });
  });
  
  return (
    <>
      <DesktopNav navbar="bg-orange" search="input-search scrolled" />
      <SearchHeader />
      { isLoading ? 
        (<SkeletonListSearch count={8} />) : 
        (<ResultList animes={animes} />)
      } 
      <MobileNav />
    </>
  );
};

export default Search;
