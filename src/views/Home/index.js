import React, {useEffect, useState} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Route, useParams} from "react-router-dom";
import Repositories from "../Repositories";
import Readme from "../Readme";
import axios from "axios";
import Spinner from "../../components/Spinner";

const Home = () => {
  const [repositories, setRepositories] = useState([])
  const [search, setSearch] = useState("")
  const [readme, setReadme] = useState("")
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const {login, repos} = useParams()

  useEffect(() => {
    axios(`https://api.github.com/users/${login}/repos`)
      .then(({data}) => {
        setRepositories(data)
        setIsLoading(false)
      })

    axios(`https://api.github.com/users/${login}`)
      .then(({data}) => setUser(data))

    if (repos !== undefined){
      console.log(repos)
      axios(`https://api.github.com/repos/${login}/${repos}/readme`,
        {headers: {'Accept': 'application/vnd.github.html.raw'}})
        .then(({data}) => {
          setReadme(data)
          setIsLoading(false)
        })
    }
  },[])

  if (isLoading){
    return  (
      <Spinner />
    )
  }

  return (
    <div>
      <Header setSearch={setSearch} user={user}/>
      <main className="main">
        <Route exact path="/:login">
          <Repositories repositories={repositories} search={search}/>
        </Route>
        <Route exact path="/:login/:repos"><Readme readme={readme}/></Route>
      </main>
      <Footer user={user}/>
    </div>
  );
};

export default Home;