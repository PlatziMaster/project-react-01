
import React from 'react';
import { Card, Col, CardTitle, ListGroup, ListGroupItemHeading, ListGroupItem, ListGroupItemText } from 'reactstrap';

const Academic = () => (

  <Col sm='6'>
    <Card body>
      <CardTitle><h3> Academic Information</h3></CardTitle>
      <ListGroup>
        <ListGroupItem active>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </Card>
  </Col>

);

export default Academic;
