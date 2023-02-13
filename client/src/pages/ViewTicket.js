import Card from "react-bootstrap/Card";
import Navbar from "../components/Navbar";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_TICKET } from "../utils/queries";

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
            <div>Loading...</div>
          ) : (
            <>
              <Card.Title>Ticket Details</Card.Title>

              <Card.Text>
                {ticket.ticketTitle}
                {ticket.ticketDescription}
                {ticket.ticketAuthor}
                {ticket.ticketStatus}
                {ticket.ticketPriority}
                {ticket.ticketAssignee}
                {ticket.createdAt}
                {ticket.updatedAt}
                {ticket.comments}
              </Card.Text>
            </>
          )}
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </>
  );
};

export default ViewTicket;
