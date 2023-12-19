import React from "react";
import Header from "./components/header.jsx";
import AboutMe from "./components/about_me.jsx";
import Divider from "../../components/divider.jsx";
import Skills from "./components/Skills.jsx";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-start h-screen bg-black pt-10">
            <Header />
            <Divider/>
            <AboutMe/>
            <Divider/>
            <Skills/>
        </div>
    );
};

export default Home;