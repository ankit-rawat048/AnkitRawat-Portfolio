import React from "react";
import Home from "../pages/Home";
import VerticalNavbar from "../components/Navbar";

const LayoutHome = () => {
  const layoutStyle = {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const navBoxStyle = {
    width: '200px',
    flexShrink: 0,
  };

  const mainContentStyle = {
    flexGrow: 1,
    padding: '20px',
    backgroundColor: '#f4f4f4',
  };

  return (
    <div style={layoutStyle}>
      <div style={navBoxStyle}>
        <VerticalNavbar />
      </div>

      <div style={mainContentStyle}>
        <Home />
      </div>
    </div>
  );
};

export default LayoutHome;
