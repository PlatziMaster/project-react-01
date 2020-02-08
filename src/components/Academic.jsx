import React from 'react';
import {
  Card,
  Col,
  CardTitle,
  ListGroup,
  ListGroupItemHeading,
  ListGroupItem,
  ListGroupItemText,
} from 'reactstrap';
import { useSelector } from 'react-redux';

const Academic = () => {
  const studies = useSelector(state => state.user.Academic);

  return (
    <>
      {studies ? (
        <Col sm='6'>
          <Card body>
            <CardTitle>
              <h3> Academic Information</h3>
            </CardTitle>
            <ListGroup>
              {studies.map(study => (
                <ListGroupItem>
                  <ListGroupItemHeading>
                    {`${study.degree} in ${study.institution}`}
                  </ListGroupItemHeading>
                  <ListGroupItemText>{study.description}</ListGroupItemText>
                  <ListGroupItemText>
                    {`${study.startDate}-- ${study.endDate}`}
                  </ListGroupItemText>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card>
        </Col>
      ) : (
        <p>There is no Information available</p>
      )}
    </>
  );
};

export default Academic;
