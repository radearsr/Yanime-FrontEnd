import React from "react";
import { useNavigate } from "react-router";
import {
  Search
} from "react-bootstrap-icons";
import "./formSearch.css";

const FormSearch = () => {
  const navigate = useNavigate();

  return (
    <form className="form-search" onSubmit={() => navigate("/search")}>
      <input type="search" name="" placeholder="Cari anime..."/>
      <button type="submit" >
        <Search size={26} />
      </button>
    </form>
  );
};

export default FormSearch;