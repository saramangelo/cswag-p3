import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const styles = {
  button: {
  fontFamily: 'Rubik Mono One, sans-serif'

}
}

function TicketModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={styles.button} variant="dark" onClick={handleShow}>
        Create a ticket
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="" placeholder="Enter ticket title" />
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
              <Form.Label>Status</Form.Label>
              <Form.Control type="" placeholder="Ticket Status" />
              <Form.Text className="text-muted">
                Open, Closed, maybe make this a radio button?
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicType">
              <Form.Label>Type</Form.Label>
              <Form.Control type="" placeholder="Ticket Type" />
              <Form.Text className="text-muted">
                Please indicate what type of ticket this is.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPriority">
              <Form.Label>Priority</Form.Label>
              <Form.Control type="" placeholder="Ticket Priority" />
              <Form.Text className="text-muted">
                Please indicate the priority level - can make this a selection
                instead of input.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProject">
              <Form.Label>Project</Form.Label>
              <Form.Control type="" placeholder="Ticket Project" />
              <Form.Text className="text-muted">
                Please indicate the project associated to this ticket.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="" placeholder="Ticket Date" />
              <Form.Text className="text-muted">Today's date.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTOC">
              <Form.Label>Estimated Time of Completion</Form.Label>
              <Form.Control type="" placeholder="Ticket TOC" />
              <Form.Text className="text-muted">
                Please indicate the estimated time of completion for this
                ticket.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAssignee">
              <Form.Label>Assignee</Form.Label>
              <Form.Control type="" placeholder="Ticket Assignee" />
              <Form.Text className="text-muted">
                Please indicate the team member to whom you'd like to assign
                this ticket.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAction">
              <Form.Label>Action</Form.Label>
              <Form.Control type="" placeholder="Ticket Action" />
              <Form.Text className="text-muted">Action.</Form.Text>
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
  );
}

export default TicketModal;
