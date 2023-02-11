import React from "react";
import LoginCard from "../components/LoginCard";
import Container from "react-bootstrap/Container";
// import background from "../images/BackgroundLog.jpg";
import background from '../images/bg4.jpg'

<<<<<<< HEAD
=======
const styles = {
    image: {
    backgroundImage: `url(${background})`,
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}
}

>>>>>>> master
const Login = () => {
  return (
    <div
      className=""
      style={styles.image}
    >
      <Container className="display-flex">
        <LoginCard />
      </Container>
    </div>
  );
};

export default Login;