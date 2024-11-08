import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./MainLayout.css";



const MainLayout = ({ children }) => {
    return (
        <div>
                <Navbar />
                <main className="mainLayoutBody">
                    {children}
                </main>
                <Footer />
        </div>
    );
};

export default MainLayout;
