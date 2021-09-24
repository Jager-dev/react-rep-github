import {Link, useParams} from "react-router-dom";
import {Container, Table} from "react-bootstrap";
import './index.css'

const Repositories = ({repositories, search}) => {
  const {login} = useParams()
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
              repositories.filter(item => item.name.includes(search)).map(item =>
                <tr key={item.id}>
                  <td>{"" + "♦"}</td>
                  <td><Link to={`/${login}/${item.name}`} className="repo">{item.name}</Link></td>
                  <td>GO</td>
                  <td>{item.updated_at}</td>
                  <td><Link to={`/${login}/${item.name}`} className="readme">View readme</Link></td>
                </tr>
              )
            }
            </tbody>
          </Table>
        </Container>
  );
};

export default Repositories;