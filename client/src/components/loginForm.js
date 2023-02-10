import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";

function LoginForm({ setUser }) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    localStorage.setItem("test", 2)
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleViewLoginCard = () => {
    setUser(true);
  };
  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    localStorage.setItem("test", 2)
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data)
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Container>
          <Button
            onClick={handleSubmit}
            className="mr-1 mb-2"
            variant="primary"
            type="submit"
          >
            Log in
          </Button>
          <Button
            onClick={handleViewLoginCard}
            className="mb-2"
            variant="primary"
            type="submit"
          >
            Sign up
          </Button>
        </Container>
      </Form>
    </Container>
  );
}

export default LoginForm;
