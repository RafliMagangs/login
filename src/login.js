import { useState } from 'react';
import React,{Button, Card, Form, Figure} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from "./aset/logo.png"

function login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const changeusername = (event) => {
    setusername(event.target.value);
  }

  const changepassword = (event) => {
    setpassword(event.target.value);
  }

  const Submit = () => {
    const dataSubmit = {
      userName: username,
      password: password,
    }
    const dataJSON = JSON.stringify(dataSubmit);
    console.log(dataJSON);
    localStorage.setItem("user", dataJSON);
    setusername("");
    setpassword("");
  };
    return (
        <div>
             <div className="text-center mt-4">
      <Figure>
        <Figure.Image
          width={188}
          height={64}
          alt="171x180"
          src={foto}
          />
      </Figure>
      </div>
      
      <Card className="col-sm-3 mx-auto" style={{backgroundColor: "#0497E1", color: "white", borderRadius: "30px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-5" style={{fontSize:"2.5em" }}>Login</Card.Title>
          <Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Username" value={username} onChange={changeusername}/>
              </Form.Group>
              <Form.Group className="mb-5" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={changepassword}/>
              </Form.Group>
            </Form>
          </Card.Text>
          <Button className="col-md-12 mx-auto mt-5" size="lg" style={{backgroundColor: "#333", color: "white" }} onClick={Submit}>Login</Button>
          <div style={{display: "flex", flexDirection: "column", textAlign: "center", marginTop: "64px" }}>
          <a href="sign_up.html" style={{color: "white" }}>Sign Up</a>
          <a href="" className="mb-5" style={{color: "white" }}>Lupa password</a>
          </div>
        </Card.Body>
      </Card>
        </div>
    )
}

export default login
