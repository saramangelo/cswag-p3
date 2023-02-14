import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Navbar from "../components/Navbar";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_TICKET } from "../utils/queries";
import Spinner from "../components/Spinner";
import ProtectPage from "../components/ProtectPage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthService from "../utils/auth";

const auth = AuthService;

const ViewTicket = () => {
  const { ticketId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TICKET, {
    variables: { ticketId },
  });

  const ticket = data?.ticket || [];

  // Date formatters for createdAt and updatedAt
  const createdAt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(ticket.createdAt);
  const updatedAt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(ticket.updatedAt);
  return (
    <>
      {auth.loggedIn() ? (
        <>
          <Navbar />
          <Card className="text-center">
            <Card.Header>Ticket Details</Card.Header>
            <Card.Body>
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <ListGroup>
                    <ListGroup.Item>Title: {ticket.ticketTitle}</ListGroup.Item>
                    <ListGroup.Item>
                      Description: {ticket.ticketDescription}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Submitter: {ticket.ticketAuthor}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Status: {ticket.ticketStatus}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Priority: {ticket.ticketPriority}
                    </ListGroup.Item>
                    <ListGroup.Item>Created at: {createdAt}</ListGroup.Item>
                    <ListGroup.Item>Updated at: {updatedAt}</ListGroup.Item>
                  </ListGroup>
                </>
              )}
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
          <Card.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Add a comment</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <Button variant="outline-dark">Submit</Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </>
      ) : (
        <div>
          <ProtectPage />
        </div>
      )}
    </>
  );
};

export default ViewTicket;
