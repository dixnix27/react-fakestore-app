import React from "react";
import { Button } from "react-bootstrap";
import { Form, Container } from "react-bootstrap";

const Register = () => {
  return (
    <Container style={{ marginTop: "50px", width: "500px" }}>
      <h1>Register</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
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

export default Register;
