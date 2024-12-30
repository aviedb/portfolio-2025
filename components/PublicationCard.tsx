import React, { useState, useRef, useEffect } from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import { PublicationType } from "../types/sections";

const PublicationCard = ({ title, authors, journal, year, abstract, link }: PublicationType) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState("24px");
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const scrollHeight = isExpanded ? `${contentRef.current.scrollHeight}px` : "24px";
      setHeight(scrollHeight);
    }
  }, [isExpanded]);

  return (
    <Col lg="12">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4" style={{ width: "100%" }}>
              <h5>{title}</h5>
              <p className="text-muted mb-2">{authors}</p>
              <div className="d-flex justify-content-start align-items-center mb-2">
                <span className="badge badge-primary mr-2">{year}</span>
                <h6 className="mb-0 text-primary">{journal}</h6>
              </div>
              <div
                className="d-flex align-items-start"
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ cursor: "pointer" }}
              >
                <button
                  className="btn btn-link p-0"
                  style={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    transform: `rotate(${isExpanded ? '180deg' : '0deg'})`,
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <i className="fa fa-chevron-down text-primary" />
                </button>
                <p
                  ref={contentRef}
                  className="description"
                  style={{
                    margin: 0,
                    height,
                    overflow: 'hidden',
                    transition: 'height 0.3s ease-in-out',
                    flex: 1,
                  }}
                >
                  {`Abstract: ${abstract}`}
                </p>
              </div>
              {link && (
                <Button
                  className="btn-icon mt-3"
                  color="primary"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-external-link mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">View Publication</span>
                </Button>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PublicationCard;
