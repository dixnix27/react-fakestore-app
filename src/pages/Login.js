import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Login = () => {
  return (
    <Container style={{ marginTop: "50px", width: "500px" }}>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button>Submit</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
