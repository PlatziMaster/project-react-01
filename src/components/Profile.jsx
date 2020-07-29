import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Profile = ({ About }) => {
  const aboutArray = About || Array(1).fill(1);
  return (
    <>
      {aboutArray.map(item => (
        <React.Fragment key={item.id}>
          <Card.Header className='text-center card-title'>
            <Accordion.Toggle as={Button} variant='link' eventKey='0' className='botton-collapse'>
              <h3 className='Profile-title botton-collapse'>{item.category}</h3>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <div className='Container__content p-4'>
              <h5 className='Profile-desc'>{item.Profile}</h5>
            </div>
          </Accordion.Collapse>
        </React.Fragment>
      ))}
    </>
  );
};
export default Profile;
2;
