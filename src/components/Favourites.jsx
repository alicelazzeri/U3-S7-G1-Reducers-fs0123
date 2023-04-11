import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import Company from "./Company";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector(state => state.favourites.content);
  const navigate = useNavigate();
  return (
    <>
      {favourites.length > 0 ? (
        <Container>
          <Row>
            <Col>
              {favourites.map((company, i) => (
                <Company company={company} key={i} index={i} />
              ))}
            </Col>
          </Row>
        </Container>
      ) : (
        <Row>
          <Col className="mt-5 d-flex flex-column justify-content-center align-items-center">
            <Alert variant="warning">No favourite companies have been added to the list yet.</Alert>
            <Button onClick={() => navigate("/")} variant="success" className="text-center">
              Back to Homepage
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Favourites;
