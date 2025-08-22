import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './MainLayout.css'; // Optional: Import any specific styles for the layout

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="main-layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;