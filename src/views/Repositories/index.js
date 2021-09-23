import React, {useEffect, useState} from 'react';
import Spinner from "../../components/Spinner";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Container, Table} from "react-bootstrap";
import './index.css'

const Repositories = () => {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    axios(`https://api.github.com/users/${params.login}/repos`)
      .then(({data}) => {
        setRepos(data)
        setIsLoading(false)
      })
  }, [params.login])

  if (isLoading){
    return  (
      <Spinner />
    )
  }

  return (
        <Container>
          <Table hover>
            <thead className="thead">
            <tr>
              <th/>
              <th>NAME</th>
              <th>DEPLOYMENT</th>
              <th>LAST COMMIT</th>
              <th>README</th>
            </tr>
            </thead>
            <tbody>
            {
              repos.map(item =>
                <tr key={item.id}>
                  <td>{"" + "♦"}</td>
                  <td>{item.name}</td>
                  <td>GO</td>
                  <td>{item.updated_at}</td>
                  <td><Link to={`/`}>View readme</Link></td>
                </tr>
              )
            }
            </tbody>
          </Table>
        </Container>
  );
};

export default Repositories;