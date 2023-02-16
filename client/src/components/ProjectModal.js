import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_PROJECT } from "../utils/mutations";
import Auth from "../utils/auth";

function ProjectModal({
  projects,
  projectData,
  setProjectData,
  currentUser,
  handleClose,
  show,
}) {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectStatus, setProjectStatus] = useState("");

  const projectManager = currentUser.username;

  const [addProject, { error }] = useMutation(ADD_PROJECT);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addProject({
        variables: {
          projectTitle,
          projectDescription,
          projectType,
          projectStatus,
          projectManager,
        },
      });
      console.log("data:", data.addProject);
      setProjectData([...projectData, data.addProject]);
    } catch (err) {
      console.error(err);
    }
    setProjectTitle("");
    setProjectDescription("");
    setProjectType("");
    setProjectStatus("");
    handleClose();
  };

  // handle change
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "title") {
      console.log("title:", value);
      setProjectTitle(value);
      console.log(projectTitle);
    }
    if (name === "description") {
      console.log("description:", value);
      setProjectDescription(value);
      console.log(projectDescription);
    }
    if (name === "type") {
      console.log("type:", value);
      setProjectType(value);
      console.log(projectType);
    }
    if (name === "status") {
      console.log("status:", value);
      setProjectStatus(value);
      console.log(projectStatus);
    }
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
                    value={projects.projectTitle}
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
                    value={projects.projectDescription}
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
                    value={projects.projectManager}
                    onChange={handleChange}
                    name="type"
                    aria-label="Default select example"
                  >
                    <option>Select Project Manager</option>
                    <option value=""></option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPriority">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    value={projects.projectStatus}
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
