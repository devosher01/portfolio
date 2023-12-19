import React from "react";
import Header from "./components/homepage/header.jsx";
import AboutMe from "./components/homepage/about_me.jsx";
import Divider from "./components/divider.jsx";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-black pt-10">
      <Header />
      <Divider/>
      <AboutMe/>
    </div>
  );
};

export default App;