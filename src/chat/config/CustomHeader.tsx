import React, { ReactElement } from 'react';

type CustomHeaderProps = {
    onClick: () => void;
};

export const CustomHeader = ({ onClick }: CustomHeaderProps): ReactElement => {
  return (
    <div style={{ fontWeight: "bold", padding: "5px", borderRadius: "3px", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#f5f5f5', }}>
        AI Chat Bot
        <button onClick={onClick} style={{
          background: 'none',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          color: '#333',
          position: 'absolute',
          right: '10px', 
          borderRadius: '50%',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = '#e0e0e0';
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
          }}>×</button>
    </div>
  );
};
