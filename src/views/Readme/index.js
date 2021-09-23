import React, {useEffect, useState} from 'react';
import Home from "../Home";
import {useParams} from "react-router-dom";
import axios from "axios";


const Readme = () => {
  const [readme, setReadme] = useState("")
  const {login, repo} = useParams()

  useEffect(() => {
    axios(`https://api.github.com/repos/${login}/${repo}/readme`,
      {headers: {'Accept': 'application/vnd.github.raw'}})
      .then(({data}) => setReadme(data))
  },[login, repo])

  return (
    <Home>
      {
        readme.map(item =>
        item.name
        )
      }
    </Home>
  );
};

export default Readme;