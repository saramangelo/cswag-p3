import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import '../App.css';

const styles = {
  header: {
    fontFamily: "Rubik Mono One, sans-serif",
    fontSize: "30px",
  },
  button: {
    fontFamily: "Rubik Mono One, sans-serif",
  },
};

function Home() {
  return (
    <>
      <Card body className="home-card">
        <header style={styles.header}>Welcome to Bug Tracker!</header>
        <Link to="/login" style={{ textAlign: "center", display: "block" }}>
          Let's start debugging
        </Link>{" "}
      </Card>
    </>
  );
}

export default Home;
