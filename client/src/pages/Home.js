import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import '../App.css';

const styles = {
  header: {
    fontFamily: "Rubik Mono One, sans-serif",
    fontSize: "30px",
    textAlign: "center"
  },
  button: {
    fontFamily: "Rubik Mono One, sans-serif",
  },
};

function Home() {
  return (
    <>
      <Card body className="home-card">
        <header style={styles.header}>Welcome to DBUG!</header>
        <div style={{}}>
          With DBUG, you can easily organize and manage all the issues related to any
          collaberative project. Our ticketing system allows users to document problems
          that need fixing, assign priority levels, and track progress as they are
          resolved. Create an account and get ready to DBUG!
        </div>
        <Button href="/login" style={{ width: "max-content", float: "center"}}>
          Log In
        </Button>{" "}
      </Card>
    </>
  );
}

export default Home;
