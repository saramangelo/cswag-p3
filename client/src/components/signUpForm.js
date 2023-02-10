import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function SignUpForm({ setUser }) {
  const handleSignUp = () => {
    setUser(false);
  };
  return (
    <Container>
      <h1>Sign Up</h1>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="mb-2 mr-1" variant="primary" type="submit">
          Sign up
        </Button>
        <Button
          className="mb-2"
          onClick={handleSignUp}
          variant="primary"
          type="submit"
        >
          Login instead
        </Button>
      </Form>
    </Container>
  );
}

export default SignUpForm;
