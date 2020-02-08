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

const Language = () => {
  const languages = useSelector(state => state.user.languages);

  return (
    <>
      {languages ? (
        <Col sm='6'>
          <Card body>
            <CardTitle>
              <h3> Languages</h3>
            </CardTitle>
            <ListGroup>
              {languages.map(language => (
                <ListGroupItem>
                  <ListGroupItemHeading>
                    {`${language.name} --- ${language.percentage}`}
                  </ListGroupItemHeading>

                </ListGroupItem>
              ))}
            </ListGroup>
          </Card>
        </Col>
      ) : (
        <p> There is no information available</p>
      )}
    </>
  );
};

export default Language;
