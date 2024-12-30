import React from "react";
import { publications } from "../portfolio";
import { Container, Row } from "reactstrap";
import PublicationCard from "../components/PublicationCard";
import Fade from "react-reveal/Fade";

const Publications = () => {
  if (!publications) return null;

  return (
    <Fade bottom duration={1000}>
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4 align-items-center">
            <div>
              <div className="icon icon-lg icon-shape bg-primary shadow rounded-circle text-white">
                <i className="ni ni-books text-white" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-primary mb-0">Publications</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {publications.map((data, i) => {
              return <PublicationCard key={i} {...data} />;
            })}
          </Row>
        </Container>
      </section>
    </Fade>
  );
};

export default Publications;
