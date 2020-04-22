import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children }) => {
  return (
    <>
		<div className="header">
      <figure>
        <img
          src='https://lh3.googleusercontent.com/proxy/GjhwrQEIRJGiiSvBr8_gojzEEsI1GJrr5VpS-LvNn4cueH--kPpdbBflyqTFU-P4Nt4orbhf-_d_86ZRHh3StN7ZkasT6K4'
          alt='profile img'
        />
      </figure>
			{children}
			</div>
    </>
  )
};

export default Header;
