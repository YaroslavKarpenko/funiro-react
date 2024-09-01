import React from "react";
import MainBlock from "../components/MainBlock";
import Advantages from "../components/Advantages";
import Products from "../components/Products";
import Rooms from "../components/Rooms";
import TipsAndTricks from "../components/TipsAndTricks";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <MainBlock />
      <Advantages />
      <Products />
      <Rooms />
      <TipsAndTricks />
    </div>
  );
};

export default Home;
