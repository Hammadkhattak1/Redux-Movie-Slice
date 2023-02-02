import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchDetails } from "../features/movies/movieSlice";
import { removeDetaildata } from "../features/movies/movieSlice";
import DetailsTable from "./detailsTable";

const Details = () => {
  const { id } = useParams();

  const detailsDispatcher = useDispatch();

  const currentState = useSelector((state) => state.movies);

  useEffect(() => {
    detailsDispatcher(fetchDetails(id));
    return () => {
      detailsDispatcher(removeDetaildata());
    };
  }, [detailsDispatcher, id]);

  return (
    <Fragment>
      <DetailsTable details={currentState.Details} />
    </Fragment>
  );
};

export default Details;
