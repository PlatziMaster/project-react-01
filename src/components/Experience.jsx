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

const Experience = () => {
  const experiences = useSelector(state => state.user.experience);

  return (
    <>
      {experiences ? (
        <Col sm='12' className='mt-10'>
          <Card body>
            <CardTitle>
              <h3> Experience</h3>
            </CardTitle>
            <ListGroup>
              {experiences.map(experience => (
                <ListGroupItem>
                  <ListGroupItemHeading>
                    <h3>{experience.jobTitle}</h3>
                    {`${experience.company} since ${experience.startDate} until ${experience.endDate}`}
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {experience.jobDescription}
                  </ListGroupItemText>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card>
        </Col>
      ) : (
        <p>There is no information available</p>
      )}
    </>
  );
};

export default Experience;
