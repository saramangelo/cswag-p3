import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Sidebar from "../components/Sidebar";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_TICKET } from "../utils/queries";
import Spinner from "../components/Spinner";
import ProtectPage from "../components/ProtectPage";
import TicketModal from "../components/TicketModal";
import { useState } from "react";

import AuthService from "../utils/auth";
import CommentList from "../components/CommentList";

const auth = AuthService;

const ViewTicket = ({ handleClose, handleShow, show }) => {
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

  // state variable for comment button collapse
  // const [open, setOpen] = useState(false);

  const [dashData, setDashData] = useState([]);

  const currentUser = auth.getProfile().data;

  return (
    <>
      {auth.loggedIn() ? (
        <Container fluid className="body-container">
          <Sidebar handleShow={handleShow} />
          <Row>
            <Col xs={1} lg={3}>
              {" "}
            </Col>
            <Col xs={10} lg={8}>
            {loading ? (
              <Spinner />
                  ) : (
              <Card className="text-center ticket-detail-card">
                <Card.Header className="ticket-detail-header">
                  <Card.Title className="ticket-detail-title">{ticket.ticketTitle}</Card.Title>
                  <Card.Text className="ticket-detail-submission">
                    Submitted by {ticket.ticketAuthor}
                    <br></br>{createdAt.split(", ")[0]} at {createdAt.split(", ")[1].slice(0,5)}{createdAt.split(", ")[1].slice(8)}
                  </Card.Text>
                </Card.Header>
                <Card.Body>
                      <ListGroup>
                        <ListGroup.Item className="ticket-detail-description">
                          {ticket.ticketDescription}
                        </ListGroup.Item>

                        <ListGroup.Item className="ticket-detail-status">
                          Status: {ticket.ticketStatus}
                        </ListGroup.Item>
                        <ListGroup.Item className="ticket-detail-priority">
                          Priority: {ticket.ticketPriority}
                        </ListGroup.Item>
                        <ListGroup.Item>Updated at: {updatedAt}</ListGroup.Item>
                      </ListGroup>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
              </Card>
            )}
              <CommentList />
            </Col>
          </Row>
        </Container>
      ) : (
        <div>
          <ProtectPage />
        </div>
      )}
      <TicketModal
        dashData={dashData}
        setDashData={setDashData}
        currentUser={currentUser}
        handleClose={handleClose}
        show={show}
      />
    </>
  );
};

export default ViewTicket;
