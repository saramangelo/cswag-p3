import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

import { ADD_PROJECT } from "../utils/mutations";

import Auth from "../utils/auth";

function ProjectModal({
  projectId,
  project,
  projectData,
  setProjectData,
  currentUser,
  handleClose,
  show,
}) {
  const [formData, setFormData] = useState({});
  const ticketAuthor = currentUser.username;

  const [addProject, { error }] = useMutation(ADD_PROJECT);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addProject({
        variables: {
          ...formData,
        },
      });
      console.log("data:", data.addProject);
      setProjectData([...projectData, data.addProject]);
    } catch (err) {
      console.error(err);
    }
    setFormData();
    handleClose();
  };

  // handle change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData();
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <p className={`m-0 ${error ? "text-danger" : ""}`}>
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Project Title</Form.Label>
                  <Form.Control
                    value={project.title}
                    onChange={handleChange}
                    name="title"
                    type="title"
                    placeholder="Enter project title"
                  />
                  <Form.Text className="text-muted">
                    Please give your project a title.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    value={project.description}
                    onChange={handleChange}
                    name="description"
                    as="textarea"
                    rows={3}
                    type=""
                    placeholder="Project Description"
                  />
                  <Form.Text className="text-muted">
                    Please give your project a brief description.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicStatus">
                  <Form.Label>Project Manager</Form.Label>
                  <Form.Select
                    value={project.projectManager}
                    onChange={handleChange}
                    name="type"
                    aria-label="Default select example"
                  >
                    <option>Select Project Manager</option>
                    <option value=""></option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicType">
                  <Form.Label>Team</Form.Label>
                  <Form.Select
                    value={project.team}
                    onChange={handleChange}
                    name="priority"
                    aria-label="Default select example"
                  >
                    <option>Select Team</option>
                    <option value=""></option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPriority">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    value={project.status}
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
          You need to be logged in to view your projects. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </>
  );
}

export default ProjectModal;
