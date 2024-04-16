import React from "react"; // Import React
import logo from "./logo.png"; // Assuming the logo.png file is in the same folder as this component

function App() {
  return (
    <div
      className="flex-container"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navigation Section */}
      <div
        className="row"
        style={{
          display: "flex",
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        {/* Navigation Links */}
        <div className="row">Hunter Evans</div>
        <div style={navLinkStyle}>Home</div>
        <div style={navLinkStyle}>Services</div>
        <div style={navLinkStyle}>Contact</div>
        <div style={navLinkStyle}>Other</div>
      </div>
      {/* Main Content Section */}
      <div className="row">
        {/* Main Content */}
        <div style={mainContentStyle}>Hero</div>
        <div style={outerBoxStyle}>outer box 3</div>
        <div style={outerBoxStyle}>outer box 4</div>
        <div style={outerBoxStyle}>outer box 5</div>
        <div style={outerBoxStyle}>outer box 6</div>
      </div>
    </div>
  );
}

// Styles
const navLinkStyle = {
  display: "flex",
  border: "1px solid black",
  backgroundColor: "black",
  color: "white",
  margin: "20px",
};

const mainContentStyle = {
  display: "flex",
  border: "1px solid red",
  height: "60vh",
  background: "grey",
  color: "white",
};
const outerBoxStyle = {
  display: "flex",
  border: "1px solid red",
  height: "30vh",
  background: "blue",
  color: "white",
};

export default App;
