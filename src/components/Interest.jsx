import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Interest() {
  const information = useContext(InformationContext);
  return (
    <div className="Interest containter">
      <div className="Interest-title">
        <h2>Lorem ipsum</h2>
      </div>
      <div className="Interest-item">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos totam
          esse deleniti iure odio praesentium aliquid reiciendis? Pariatur eaque
          molestiae optio velit, repudiandae exercitationem quis quibusdam quasi
          officia accusantium similique.
        </p>
      </div>
      <div className="Interest-item">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos totam
          esse deleniti iure odio praesentium aliquid reiciendis? Pariatur eaque
          molestiae optio velit, repudiandae exercitationem quis quibusdam quasi
          officia accusantium similique.
        </p>
      </div>
      <div className="Interest-item">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos totam
          esse deleniti iure odio praesentium aliquid reiciendis? Pariatur eaque
          molestiae optio velit, repudiandae exercitationem quis quibusdam quasi
          officia accusantium similique.
        </p>
      </div>
    </div>
  );
}
