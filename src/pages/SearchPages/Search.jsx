import React, { Fragment } from "react";
import SearchHeader from "./SearchHeader";
import ResultList from "./ResultList";
import DesktopNav from "../../GlobalComponents/DesktopNav";
import MobileNav from "../../GlobalComponents/MobileNav";

const Search = () => {
  return (
    <Fragment>
      <DesktopNav navbar="bg-orange" search="input-search scrolled" />
      <SearchHeader />
      <ResultList />
      <MobileNav />
    </Fragment>
  );
};

export default Search;
