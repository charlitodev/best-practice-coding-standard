import React from "react";
import MediaContainer from "./MediaContainer";
import { SideBar } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <MediaContainer />
    </div>
  );
};

export default Home;
