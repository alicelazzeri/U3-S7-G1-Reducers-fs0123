import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { getCompanyAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.company.content);

  useEffect(() => {
    dispatch(getCompanyAction(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
