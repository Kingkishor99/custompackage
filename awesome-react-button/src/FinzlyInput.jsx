import React from 'react';

const HomePage = () => {
 

  return (
    <div
      style={{
        backgroundColor:  '#333',
        color:  '#fff' ,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      <h1>Welcome to My React Page</h1>
      <p>This is a simple example of a React component with a toggle theme feature.</p>
      <button
        onClick={()=>console.log("sdksfjdks")}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#555',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Toggle 'Light'  Mode
      </button>
    </div>
  );
};

export default HomePage;
