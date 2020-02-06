import React from 'react';
import { Progress } from 'reactstrap';

const Skill = () => (
  <div className='skill_item'>
    <h4>
      React
      <span className='counter'>85</span>
      %
    </h4>
    <div className='progress_br'>
      <Progress color='info' value={50} />
    </div>
  </div>
);

export default Skill;
