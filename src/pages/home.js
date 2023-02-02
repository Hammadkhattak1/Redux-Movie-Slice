import { Fragment, useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";

import Header from "../common/header";
import MainPage from "./mainpage";
import ReactSlick from "../components/moviesSlick";
import { Spinner } from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../features/movies/movieSlice";
import Search from "./search";

const Home = () => {
  const dispatchMovies = useDispatch();

  const MoviesState = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    const getMoviesData = async () => {
      dispatchMovies(fetchAsyncMovies());
      dispatchMovies(fetchAsyncSeries());
    };
    getMoviesData();
  }, [dispatchMovies]);

  const [property] = useState({
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  });

  return (
    <Fragment>
      <div className="container">
        <Header></Header>

        {MoviesState.movies.isLoading ? (
          <div className="loading">
            <Spinner size="xl" />
          </div>
        ) : (
          <Fragment>
            <Search></Search>
            <div className="slick-caraousel">
              <Heading as="h4" size="lg" mb={"10"} color={"#fff"} mt={"12"}>
                Featured Movies{" "}
              </Heading>

              <ReactSlick slickData={MoviesState.movies.Movies}></ReactSlick>
            </div>

            <MainPage
              property={property}
              movieState={MoviesState.movies.Movies}
            ></MainPage>

            <MainPage
              property={property}
              movieState={MoviesState.movies.Series}
            ></MainPage>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
