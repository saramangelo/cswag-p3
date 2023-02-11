import Card from "react-bootstrap/Card";
import TicketModal from "./TicketModal";

const styles = {
  header: {
    fontFamily: "Rubik Mono One, sans-serif",
    fontSize: "40px"
  },
};

function Welcome() {
  return (
    <>
      <Card body>
        <header style={styles.header}>Welcome to your Dashboard!</header>
      </Card>
      <TicketModal />
    </>
  );
}

export default Welcome;
