import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import Fade from "react-reveal/Fade";

const Feedbacks = () => {
  if (!feedbacks) return null;

  return (
    <Fade bottom duration={2000}>
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4 align-items-center">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                <i className="fa fa-star text-primary" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-primary mb-0">Clients Feedback</h4>
            </div>
          </div>
          <Row className="g-3">
            {feedbacks.map((data, i) => {
              return (
                <Col key={i} lg={6}>
                  <FeedbackCard {...data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Fade>
  );
};

export default Feedbacks;
