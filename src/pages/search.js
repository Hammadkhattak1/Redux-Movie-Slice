import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../features/movies/movieSlice";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const dispatchSearch = useDispatch();

  const handleSearch = () => {
    if (!searchText) {
      return alert("Please provide search term!");
    }
    dispatchSearch(fetchAsyncMovies(searchText));
    dispatchSearch(fetchAsyncSeries(searchText));
    setSearchText("");
  };

  return (
    <Fragment>
      <div className="searchDiv">
        <input
          type={"search"}
          placeholder="Search Movies"
          className="seachField"
          autoFocus
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <i
          class="bi bi-search"
          onClick={(e) => {
            handleSearch();
          }}
        ></i>
      </div>
    </Fragment>
  );
};

export default Search;
