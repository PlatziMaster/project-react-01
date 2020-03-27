import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Languages() {
  const Information = useContext(InformationContext);
  return (
    <div className="languages containter">
      <div className="Languages-title">
        <h2>Lorem, ipsum dolor sit</h2>
      </div>
      <div className="Languages-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          necessitatibus ab provident magnam minus cumque et quaerat vitae quae
          perferendis quas, saepe explicabo veritatis voluptas, tempore
          voluptate commodi iure quia.
        </p>
      </div>
      <div className="Languages-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          necessitatibus ab provident magnam minus cumque et quaerat vitae quae
          perferendis quas, saepe explicabo veritatis voluptas, tempore
          voluptate commodi iure quia.
        </p>
      </div>
      <div className="Languages-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          necessitatibus ab provident magnam minus cumque et quaerat vitae quae
          perferendis quas, saepe explicabo veritatis voluptas, tempore
          voluptate commodi iure quia.
        </p>
      </div>
    </div>
  );
}
