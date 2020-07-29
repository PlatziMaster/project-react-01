import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Experience = ({ experience }) => {
  const experienceTitle = experience || Array(1).fill(1);
  const experienceArray = experience || Array(3).fill(1);
  return (
    <>
      <Card.Header className='text-center card-title'>
        <Accordion.Toggle as={Button} variant='link' eventKey='1' className='botton-collapse'>
          {experienceTitle.map(item => (
            <h3 className='mb-3 Experience-title botton-collapse' key={item.id}>{item.category}</h3>
          ))}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey='1'>
        <Card.Body>
          {experienceArray.map(item => (
            <React.Fragment key={item.id}>
              <div className='Container__content p-4'>
                <h4 className='mb-3 Experience-item text-center mt-5 mb-5'>
                  {item.company}
                </h4>
                <div className='row'>
                  <div className='col-md-6 col-sm-12 Experience-item text-center'>
                    <h5>{item.endDate}</h5>
                    <h5>{item.startDate}</h5>
                  </div>
                  <div className='col-md-6 col-sm-12 Experience-item'>
                    <h5>{item.jobTitle}</h5>
                    <h5>{item.jobDescription}</h5>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </>
  );
};

export default Experience;
