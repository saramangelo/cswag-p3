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

  const ticket = data?.tickets || [];
  console.log(ticket);
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
                {ticket[0].ticketTitle}
                {ticket[0].ticketDescription}
                {ticket[0].ticketAuthor}
                {ticket[0].ticketStatus}
                {ticket[0].ticketPriority}
                {ticket[0].ticketAssignee}
                {ticket[0].createdAt}
                {ticket[0].updatedAt}
                {ticket[0].comments}
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
