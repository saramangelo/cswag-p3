import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function LoginForm({ setUser }) {
  const handleSignUp = () => {
    setUser(true);
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Container>
          <Button className="mr-1 mb-2" variant="primary" type="submit">
            Log in
          </Button>
          <Button
            onClick={handleSignUp}
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
