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
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TicketModal from "../components/TicketModal";

import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import AuthService from "../utils/auth";

const auth = AuthService;


const ViewTicket = ({handleClose, handleShow, show}) => {
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
  const [open, setOpen] = useState(false);

  const [dashData, setDashData] = useState([]);
  
  const currentUser = auth.getProfile().data;

  return (
    <>
    {auth.loggedIn() ? (
      <Container fluid className="body-container">
        <Sidebar handleShow={handleShow}/>
        <Row>
          <Col xs={1} lg={3} >
            {" "}
          </Col>
          <Col xs={10} lg={8}>
            <Card className="text-center detail-card">
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
                      <ListGroup.Item>Status: {ticket.ticketStatus}</ListGroup.Item>
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
                <Button
                  variant="outline-dark" 
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    Add a comment
                  </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label></Form.Label>
                  <Form.Control as="textarea" rows={3} />
                  <Button variant="outline-dark">Submit</Button>
                </Form.Group>
              </Form>
            </Card>
          </div>
        </Collapse>
      </div>
       </Col>
       </Row>
     </Container>
   ) : (
     <div>
       <ProtectPage />
     </div>
   )}
    <TicketModal dashData={dashData} setDashData={setDashData} currentUser={currentUser} handleClose={handleClose} show={show}/>
    </>
  );
};

export default ViewTicket;
