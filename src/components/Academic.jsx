import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Academic = ({ academic }) => {
  const academicTitle = academic || Array(1).fill(1);
  const academicArray = academic || Array(3).fill(1);
  return (
    <>
      <Card.Header className='text-center card-title'>
        <Accordion.Toggle as={Button} variant='link' eventKey='2' className='botton-collapse'>
          {academicTitle.map(item => (
            <h3 className='mb-3 Academic-title botton-collapse' key={item.id}>{item.category}</h3>
          ))}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey='2'>
        <Card.Body>
          {academicArray.map(item => (
            <React.Fragment key={item.id}>
              <div className='Container__content p-4'>
                <div className='row'>
                  <div className='col-md-6 col-sm-12 mt-2 Academic-item'>
                    <h5>{item.name}</h5>
                    <h5>{item.institution}</h5>
                    <h5>{item.date}</h5>
                  </div>
                  <div className='col-md-6 col-sm-12 mt-2'>
                    <h5>{item.description}</h5>
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

export default Academic;
