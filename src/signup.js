import {Button, Card, Form, Figure} from 'react-bootstrap';
import React,{ useState } from 'react';
import {useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from "./aset/logo.png"


function signup() {

  const history = useHistory();
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [Confirm, setconfrim] = useState('');

  const changeusername = (event) => {
    setusername(event.target.value);
  }

  const changepassword = (event) => {
    setpassword(event.target.value);
  }

  const changeconfrim = (event) => {
    setconfrim(event.target.value);
  }

  const Submit = () => {
    const dataSubmit = {
      userName: username,
      password: password,
      confirm: Confirm,
    }
    const dataJSON = JSON.stringify(dataSubmit);
    const USER = dataJSON;

    if (USER.confirm === Confirm) {
      localStorage.setItem("user", dataJSON);
      history.push('/')
    }
    else {
      alert("Confrim password anda berbeda!")
    }
    setusername("");
    setpassword("");

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
      
      <Card className="col-md-5 mx-auto" style={{backgroundColor: "#0497E1", color: "white", borderRadius: "30px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-5" style={{fontSize:"2.5em" }}>Sign Up</Card.Title>
          <Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Username" value={username} onChange={changeusername} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={changepassword}/>
              </Form.Group>
              <Form.Group className="mb-5" controlId="formGroupPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" value={Confirm} onChange={changeconfrim}/>
              </Form.Group>
            </Form>
          </Card.Text>
          <Button className="col-md-12 mx-auto mt-5" size="lg" style={{backgroundColor: "#333", color: "white" }} onClick={Submit}>Sign Up</Button>
          <div  className="mb-5"  style={{display: "flex", flexDirection: "column", textAlign: "center", marginTop: "64px" }}>
          <p style={{color: "white" }}>Sudah punya akun? <a style={{color: "white" }} href="sign_in.html">Sign In</a></p>
          {/* <a href="sign_up.html" style={{color: "white" }}>Sign Up</a>
          <a href="" className="mb-5" style={{color: "white" }}>Lupa password</a> */}
          </div>
        </Card.Body>
      </Card>
        </div>
    )
}
}
   export default signup
