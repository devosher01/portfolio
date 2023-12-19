import React from "react";
import Header from "./components/header.jsx";
import AboutMe from "./components/about_me.jsx";
import Divider from "../../components/divider.jsx";
import Skills from "./components/Skills.jsx";
import Tools_Container from "./components/tools.jsx";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-start h-screen bg-black pt-10">
            <Header />
            <Divider/>
            <AboutMe/>
            <Divider/>
            <Skills/>
            <Divider/>
            <Tools_Container/>
        </div>
    );
};

export default Home;