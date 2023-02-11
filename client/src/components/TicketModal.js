import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import { ADD_TICKET } from '../utils/mutations';

import Auth from '../utils/auth';




const styles = {
  button: {
    fontFamily: "Rubik Mono One, sans-serif",
  },
};

function TicketModal() {

  const [ticketTitle, setTitle] = useState('');
  const [ticketDescription, setDescription] = useState('');
  const [ticketType, setType] = useState('');
  const [ticketPriority, setPriority] = useState('');
  const [ticketStatus, setStatus] = useState('');

  const [addTicket, { error }] = useMutation(ADD_TICKET);

  // handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTicket({
        variables: {
          ticketTitle,
          ticketDescription,
          ticketType,
          ticketPriority,
          ticketStatus,
          // ticketAuthor: Auth.getProfile().data.username,
        },
      });

      setTitle('');
      setDescription('');
      setType('');
      setPriority('');
      setStatus('');

    } catch (err) {
      console.error(err);
    }
  };

  // handle change
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'title') {
      setTitle(value);
    }
    if (name === 'description') {
      setDescription(value);
    }
    if (name === 'type') {
      setType(value);
    }
    if (name === 'priority') {
      setPriority(value);
    }
    if (name === 'status') {
      setStatus(value);
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
      <Button style={styles.button} variant="dark" onClick={handleShow}>
        Create a ticket
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control value={ticketTitle} onChange={handleChange} name="title" type="" placeholder="Enter ticket title" />
              <Form.Text className="text-muted">
                Please give your ticket a title.
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control value={ticketDescription} onChange={handleChange}
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
              <Form.Select value={ticketType} onChange={handleChange} name="type" aria-label="Default select example">
                <option>Select Type</option>
                <option value="1">Front End</option>
                <option value="2">API</option>
                <option value="3">Back End</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicType">
              <Form.Label>Priority</Form.Label>
              <Form.Select value={ticketPriority} onChange={handleChange} name="priority" aria-label="Default select example">
                <option>Select Priority</option>
                <option value="1">Urgent</option>
                <option value="2">High</option>
                <option value="3">Medium</option>
                <option value="4">Low</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPriority">
              <Form.Label>Status</Form.Label>
              <Form.Select value={ticketStatus} onChange={handleChange} name="status" aria-label="Default select example">
                <option>Select Status</option>
                <option value="1">Archived</option>
                <option value="2">Resolved</option>
                <option value="3">Testing</option>
                <option value="4">Development</option>
                <option value="5">Unassigned</option>
                <option value="6">New</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Submit ticket
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    ) : (
      <p>
        You need to be logged in to share your thoughts. Please{' '}
        <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
      </p>
    )}
    </>
  );
}

export default TicketModal;
