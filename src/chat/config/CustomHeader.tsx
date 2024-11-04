import React, { ReactElement } from 'react';
import './CustomHeader.css';

export type CustomHeaderProps = {
    onClick: () => void;
};

export const CustomHeader = ({ onClick }: CustomHeaderProps): ReactElement => {
  return (
    <div className='custom-header'>
        AI Chat Bot
        <button className='custom-header-close-button' 
        onClick={onClick}
        onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = '#e0e0e0';
        }}
        onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
        }}>×</button>
    </div>
  );
};
