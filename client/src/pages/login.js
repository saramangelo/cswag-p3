import React from "react";
import LoginCard from "../components/loginCard";
import Container from "react-bootstrap/Container";
import background from "../images/BackgroundLog.jpg";

const Login = () => {
  return (
    <div
      className="mt-0 min-100-vh cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container className="display-flex">
        <LoginCard />
      </Container>
    </div>
  );
};

export default Login;
