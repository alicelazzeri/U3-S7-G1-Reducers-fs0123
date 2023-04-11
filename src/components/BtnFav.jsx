import { Badge, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetResultsAction } from "../redux/actions";

const BtnFav = () => {
  const favourites = useSelector(state => state.favourites.content.length);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetResultsAction());
  };

  return (
    <Navbar bg="light">
      <Container>
        <Link onClick={handleReset} className="navbar-brand" to="/">
          {" "}
          Home{" "}
        </Link>
        <Link className="nav-link" to="/favourites">
          My Favs 💖{" "}
          <span>
            <Badge bg="warning">{favourites}</Badge>
          </span>
        </Link>
      </Container>
    </Navbar>
  );
};

export default BtnFav;
