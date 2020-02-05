import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children }) => {
  return (
    <div className='Header'>
      <div className='Header__photoContainer'>
        <img src='https://lh3.googleusercontent.com/ziiTEou3OfHJPFOH1A66VbtXCxXNVRQmJUQiPLz5HVOtz4ZxJTXI-ihSTx8pH8GdFsafigeeYC_xLpzdX84kMs3IXoqadumvfSbItaAGgwszEhdQTLo9k7jr0y4D-1DEONVUz_CJEXFa83R4Tlj38hJcejyxNF5QvcOf5-8ucpRzJ7k9SExkPNbLBB-sUsZoJ9-dI2tVQsG7SMDIBKsJYvwWT9Rw5N3_qZqOcVEShTXyNLZErIzD932HU2Qm-Uq9oIwvaugQtufn7YvcukIlIAhzkaiHl6H9vJyPf5YACiiCvz1gucVKA8f17fPexlswlDFjJRaj6a7glYSea4rECW8Ki1hRnynuWqQOLGw4VppirIOm5NcNEU1F7qcQn10pRIL9IrXvm2NKOufkcUdEkt9PPiOBPwI5sbIK5vSns4qyCK60yPXMWwWeWxDNyVRtQm1xEkWINeCgtL9dEY7dy22nq5NHwXtIbm95NCWL9pDzpl73gyl9PcNZzDlx5hZ5FTPz3O3q1AsxsZ4gTmqWzHawMiRBz4PY03ac-5qUQI9WM6yZ5D-wXARNMKfTlIcy6hK8hI6b-Q0_p_cno8S2HVrYo_TGtg5qOIRmBp2cmGcgaNWYFsFk-IWHnAS0dMOtClcrKrFDFe_H7yTGB-R5tGduMqOx6NI-KZL9JznLoAkH3Fv9Gz3akg=s664-no' alt='profile' />
      </div>
      <div>
        { children}
      </div>

    </div>
  );
};

export default Header;
