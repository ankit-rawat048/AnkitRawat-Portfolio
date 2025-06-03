import React from 'react';

const VerticalNavbar = () => {
  const navStyle = {
    height: '100vh',
    width: '200px',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#111',
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const logoStyle = {
    color: 'white',
    marginBottom: '30px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const aStyle = {
    color: 'white',
    padding: '12px 0',
    textDecoration: 'none',
    width: '100%',
    textAlign: 'center',
    transition: 'background 0.3s',
  };

  const hoverStyle = {
    backgroundColor: '#575757',
  };

  return (
    <div style={navStyle}>
      <div style={logoStyle}>MySite</div>
      <a to="#home" style={aStyle} onMouseOver={e => e.target.style.background = hoverStyle.backgroundColor} onMouseOut={e => e.target.style.background = 'transparent'}>🏠 Home</a>
      <a to="#about" style={aStyle} onMouseOver={e => e.target.style.background = hoverStyle.backgroundColor} onMouseOut={e => e.target.style.background = 'transparent'}>👤 About</a>
      <a to="#projects" style={aStyle} onMouseOver={e => e.target.style.background = hoverStyle.backgroundColor} onMouseOut={e => e.target.style.background = 'transparent'}>📁 Projects</a>
      <a to="#contact" style={aStyle} onMouseOver={e => e.target.style.background = hoverStyle.backgroundColor} onMouseOut={e => e.target.style.background = 'transparent'}>📞 Contact</a>
    </div>
  );
};

export default VerticalNavbar;
