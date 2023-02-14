import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Navbar from "../components/Navbar";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_TICKET } from "../utils/queries";
import Spinner from "../components/Spinner";

const ViewTicket = () => {
  const { ticketId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TICKET, {
    variables: { ticketId },
  });

  const ticket = data?.ticket || [];
  console.log(data);
  return (
    <>
      <Navbar />
      <Card className="text-center">
        <Card.Header>Ticket</Card.Header>
        <Card.Body>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <Card.Title>Ticket Details</Card.Title>
              <ListGroup>
                <ListGroup.Item>Title: {ticket.ticketTitle}</ListGroup.Item>
                <ListGroup.Item>Description: {ticket.ticketDescription}</ListGroup.Item>
                <ListGroup.Item>Submitter: {ticket.ticketAuthor}</ListGroup.Item>
                <ListGroup.Item>Status: {ticket.ticketStatus}</ListGroup.Item>
                <ListGroup.Item>Priority: {ticket.ticketPriority}</ListGroup.Item>
                <ListGroup.Item>Created at: {ticket.createdAt}</ListGroup.Item>
                <ListGroup.Item>Updated at: {ticket.updatedAt}</ListGroup.Item>
              </ListGroup>
            </>
          )}
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </>
  );
};

export default ViewTicket;
