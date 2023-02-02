import { Fragment } from "react";
import { useSelector } from "react-redux";

const About = () => {

const movieState  = useSelector((state)=>state)

console.log("movies state",movieState)

  return <Fragment>
    this is about page...
  </Fragment>;
};

export default About;
