// Layout.js
import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="background">
            {children}
        </div>
    );
};

export default Layout;
