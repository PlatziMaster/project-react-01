import React from 'react';
import '../styles/components/Item.styl';

const Item = (props) => {

  return (
    <div className='Item'>
      <p className='Item__paragraph'>{props.item.name}</p>
      <p className='Item__paragraph'>{props.item.position}</p>
      <p className='Item__paragraph'>{props.item.period}</p>
      <p className='Item__paragraph'>Tasks</p>
      <div className='Item__tasks'>
        {
          props.item.tasks.map(task => (<p className='tasks' key={task}>{task}</p>))
        }
      </div>
    </div>
  );
};

export default Item;
