import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Route} from "react-router-dom";
import Repositories from "../Repositories";
import Readme from "../Readme";

const Home = () => {
  return (
    <div>
      <Header/>
      <main className="main">
        <Route exact path="/:login"><Repositories /></Route>
        <Route exact path="/:login/:readme"><Readme /></Route>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;