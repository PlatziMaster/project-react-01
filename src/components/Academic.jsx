import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Academic() {
  const Information = useContext(InformationContext);

  return (
    <div className="Academic containter">
      <div className="Academic-title">
        <h2>Lorem ipsum dolor sit</h2>
      </div>
      <div className="Academic-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem id, eum molestias iure quo et deserunt rerum amet totam
          cum fuga nisi. Odit eum repudiandae, fugiat in fuga nulla asperiores.
        </p>
      </div>
      <div className="Academic-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem id, eum molestias iure quo et deserunt rerum amet totam
          cum fuga nisi. Odit eum repudiandae, fugiat in fuga nulla asperiores.
        </p>
      </div>
      <div className="Academic-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem id, eum molestias iure quo et deserunt rerum amet totam
          cum fuga nisi. Odit eum repudiandae, fugiat in fuga nulla asperiores.
        </p>
      </div>
    </div>
  );
}
