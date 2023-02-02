import { Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      <nav className="mainNav">
        <div className="headingOne">
          <Text fontSize="3xl" fontWeight={"bold"}>
            {" "}
            OMBD <span className="mApp"> Movie App</span>
            <i class="bi bi-film"></i>
          </Text>
        </div>
        <ul className="navUl" style={{fontWeight:"bold"}}>
          <li className="active">
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            <Link to={"/about"}>About</Link>{" "}
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Header;
