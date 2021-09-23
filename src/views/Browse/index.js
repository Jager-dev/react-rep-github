import React, {useState} from 'react';
import {Button, Form, Row, Col} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import Particles from 'react-particles-js'

const Browse = () => {
  const [inputValue, setInputValue] = useState("")
  const history = useHistory()



  const input = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
      history.push(`/${inputValue}`)
    setTimeout(() => setInputValue(""), 1000)
  }

  const enterPress = (e) => {
    if (e.key === "Enter"){
      handleClick()
    }
  }

  return (
    <div className="browse">
    {/*<Particles*/}
    {/*  params={{*/}
    {/*    "particles": {*/}
    {/*      "number": {*/}
    {/*        "value": 150*/}
    {/*      },*/}
    {/*      "size": {*/}
    {/*        "value": 5*/}
    {/*      }*/}
    {/*    },*/}
    {/*    "interactivity": {*/}
    {/*      "events": {*/}
    {/*        "onhover": {*/}
    {/*          "enable": true,*/}
    {/*          "mode": "repulse"*/}
    {/*        }*/}
    {/*      }*/}
    {/*    }*/}
    {/*  }} />*/}
    <div className="input">
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Username"  className="search_rep" onKeyDown={enterPress} value={inputValue} onChange={input}/>
          </Col>
          <Col>
            <Button variant="secondary" onClick={handleClick} disabled={!inputValue.trim()}>View repositories</Button>
          </Col>
        </Row>
      </Form>
    </div>
    </div>
  );
};

export default Browse;