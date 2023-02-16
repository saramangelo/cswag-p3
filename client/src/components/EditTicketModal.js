import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_TICKET } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import { UPDATE_TICKET } from "../utils/mutations";
import Auth from "../utils/auth";

function EditTicketModal({ ticket, tickets, setDashData, id }) {
  const [ticketTitle, setTitle] = useState(ticket.ticketTitle);
  const [ticketDescription, setDescription] = useState(
    ticket.ticketDescription
  );
  const [ticketType, setType] = useState(ticket.ticketType);
  const [ticketPriority, setPriority] = useState(ticket.ticketPriority);
  const [ticketStatus, setStatus] = useState(ticket.ticketStatus);

  const ticketId = ticket._id;

  // useEffect(() => {
  //   if (ticket) {
  //     setTitle(ticket.ticketTitle);
  //     setDescription(ticket.ticketDescription);
  //     setType(ticket.ticketType);
  //     setPriority(ticket.ticketPriority);
  //     setStatus(ticket.ticketStatus);
  //   }
  // }, [ticket]);

  const [updateTicket, { error }] = useMutation(UPDATE_TICKET);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("about to make request");
    try {
      const { data } = await updateTicket({
        variables: {
          ticketId: id,
          ticketTitle,
          ticketDescription,
          ticketType,
          ticketStatus,
          ticketPriority,
        },
      });

      const updatedTickets = tickets.map(
        (ticket) => {
          if(ticket._id !== data.updateTicket._id){
            return data.updateTicket;
          }else{
            return ticket;
          }
        }
      );

      console.log("data:", data.updateTicket);
      setDashData(updatedTickets);
    } catch (err) {
      console.error(err);
    }

    handleClose();
  };

  // handle change
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "title") {
      console.log("title:", value);
      setTitle(value);
      console.log(ticketTitle);
    }
    if (name === "description") {
      console.log("description:", value);
      setDescription(value);
      console.log(ticketDescription);
    }
    if (name === "type") {
      console.log("type:", value);
      setType(value);
      console.log(ticketType);
    }
    if (name === "priority") {
      console.log("priority:", value);
      setPriority(value);
      console.log(ticketPriority);
    }
    if (name === "status") {
      console.log("status:", value);
      setStatus(value);
      console.log(ticketStatus);
    }
  };

  // modal variable states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <span className={`m-0 ${error ? "text-danger" : ""}`}>
            {error && <span className="ml-2">{error.message}</span>}
          </span>
          <Link variant="dark" onClick={handleShow}>
            <MDBIcon fas icon="pencil-alt" />
          </Link>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    value={ticketTitle}
                    onChange={handleChange}
                    name="title"
                    type="title"
                    placeholder="Enter ticket title"
                  />
                  <Form.Text className="text-muted">
                    Please give your ticket a title.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    value={ticketDescription}
                    onChange={handleChange}
                    name="description"
                    as="textarea"
                    rows={3}
                    type=""
                    placeholder="Ticket Description"
                  />
                  <Form.Text className="text-muted">
                    Please give your ticket a brief description.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicStatus">
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    value={ticketType}
                    onChange={handleChange}
                    name="type"
                    aria-label="Default select example"
                  >
                    <option>Select Type</option>
                    <option value="Front End">Front End</option>
                    <option value="API">API</option>
                    <option value="Back End">Back End</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicType">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    value={ticketPriority}
                    onChange={handleChange}
                    name="priority"
                    aria-label="Default select example"
                  >
                    <option>Select Priority</option>
                    <option value="Urgent">Urgent</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPriority">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    value={ticketStatus}
                    onChange={handleChange}
                    name="status"
                    aria-label="Default select example"
                  >
                    <option>Select Status</option>
                    <option value="Archived">Archived</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Testing">Testing</option>
                    <option value="Development">Development</option>
                    <option value="Unassigned">Unassigned</option>
                    <option value="New">New</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="dark" onClick={handleSubmit}>
                Submit ticket
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </>
  );
}

export default EditTicketModal;
