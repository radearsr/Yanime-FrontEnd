import React from "react";
import {
  FormSearch,
  SearchResult,
} from "../../components";
import "./search.css";

const Search = () => {
  return (
    <div className="search-result-wrapper">
      <div className="mobile-form-search bg-light">
        <FormSearch />
      </div>
      <div className="result-list">
        <SearchResult 
          srcThumb="https://185.224.82.193/img/123263l.jpg"
          title="Lorem ipsum dolor sit lorem ipsum dolor sit amet amet Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, magnam!"
          genre="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, magni! Lorem ipsum lorem p"
          type="12 Episode"
        />
        <SearchResult 
          srcThumb="https://185.224.82.193/img/123263l.jpg"
          title="Lorem ipsum dolor sit lorem ipsum dolor sit amet amet Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, magnam!"
          genre="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, magni! Lorem ipsum lorem"
          type="12 Episode"
        />
        <SearchResult 
          srcThumb="https://185.224.82.193/img/123263l.jpg"
          title="Lorem ipsum dolor sit lorem ipsum dolor sit amet amet Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, magnam!"
          genre="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, magni! Lorem ipsum lorem"
          type="12 Episode"
        />
        <SearchResult 
          srcThumb="https://185.224.82.193/img/123263l.jpg"
          title="Lorem ipsum dolor sit lorem ipsum dolor sit amet amet Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, magnam!"
          genre="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, magni! Lorem ipsum lorem"
          type="12 Episode"
        />
      </div>
    </div>
  );
};

export default Search;