import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Fade from "react-reveal/Fade";
import { FeedbackType } from "../types/sections";

const FeedbackCard = ({ name, role, feedback }: FeedbackType) => {
  return (
    <Card className="shadow-lg--hover shadow my-4 h-100 bg-gradient-primary">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <CardTitle tag="h4" className="mb-2 text-white">
              {name}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-light">
              {role}
            </CardSubtitle>
            <p className="description mt-2 text-white">{feedback}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeedbackCard;
