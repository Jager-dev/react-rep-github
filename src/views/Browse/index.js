import React, {useState} from 'react';
import {Button, Form, Row, Col} from "react-bootstrap";
import {useHistory} from 'react-router-dom'

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
      <Form  className='p-5 main-form'>
          <div className='d-flex'>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Col sm={10}>
                <Form.Control placeholder="Username"  className="search_rep" onKeyDown={enterPress} value={inputValue} onChange={input}/>
              </Col>
            </Form.Group>
            <Button variant="secondary" onClick={handleClick} disabled={!inputValue.trim()}>View repositories</Button>
          </div>
      </Form>
    </div>
  );
};

export default Browse;