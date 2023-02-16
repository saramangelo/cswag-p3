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
import ProjectModal from "../components/ProjectModal";
import { useEffect, useState } from "react";

import AuthService from "../utils/auth";
import CommentList from "../components/CommentList";

const auth = AuthService;


const ViewTicket = ({ show, handleShow, handleClose, showProject, handleProjectShow, handleProjectClose }) => {

  const { ticketId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TICKET, {
    variables: { ticketId },
    onCompleted: () => {
      setCommentData(data.ticket.comments);
    },
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

  const [projectData, setProjectData] = useState([]);

  const [commentData, setCommentData] = useState([]);


  // current user data to send to Ticket Modal
  const currentUser = auth.getProfile().data;


  const [flairColor, setFlairColor] = useState("grey");

  let styles = {
    "backgroundColor": flairColor 
  };

  useEffect(()=>{

    if(ticket?.ticketPriority==="Low"){
      setFlairColor("#a5db95");
    }else if(ticket?.ticketPriority==="Medium"){
      setFlairColor("#f7f374");
    }else if(ticket?.ticketPriority==="High"){
      setFlairColor("#e88e82");
    }else{ 
      setFlairColor("#f288d6");
    }
  },[ticket?.ticketPriority]);

  return (
    <>
      {auth.loggedIn() ? (
        <Container fluid className="body-container">
          <Sidebar handleShow={handleShow} handleProjectShow={handleProjectShow} />
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
                  </Card.Text>
                </Card.Header>
                <Card.Body>
                  <Card.Text className="ticket-detail-description">
                    {ticket.ticketDescription}
                  </Card.Text>
                  <div className="ticket-detail-flair">
                    <Card.Text className="ticket-detail-status">
                      {ticket.ticketStatus}
                    </Card.Text>
                    <Card.Text className="ticket-detail-priority" style={styles}>
                      {ticket.ticketPriority} Priority
                    </Card.Text>
                  </div>
                </Card.Body>
                <Card.Footer className="ticket-detail-footer">
                  {createdAt.split(", ")[0]} [{createdAt.split(", ")[1].slice(0,5)}{createdAt.split(", ")[1].slice(8)}]
                 <br></br>{updatedAt===createdAt ? "" :  `  (Updated ${updatedAt.split(", ")[0]} [${updatedAt.split(", ")[1].slice(0,5)}${updatedAt.split(", ")[1].slice(8)}])` }
                </Card.Footer>
              </Card>
              <CommentList
                ticketId={ticketId}
                comments={commentData}
                setCommentData={setCommentData}
                commentData={commentData}
              />
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
      <ProjectModal
        projectData={projectData}
        setProjectData={setProjectData}
        currentUser={currentUser}
        handleProjectClose={handleProjectClose}
        showProject={showProject}
      />
    </>
  );
};

export default ViewTicket;
