import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useQuery } from "@apollo/client";
// import { QUERY_SINGLE_PROJECT } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
// import { UPDATE_PROJECT } from "../utils/mutations";
import Auth from "../utils/auth";

function EditProjectModal({ project, projects, setProjectData }) {
  const [formData, setFormData] = useState({})

  const projectId = project._id;

  // const [updateProject, { error }] = useMutation(UPDATE_PROJECT);
  
  // handle change
  const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
      // event.preventDefault();
      // console.log("about to make request");
      // try {
      //   const { data } = await updateProject({
      //     variables: { ...formData},
      //   });
       
      // } catch (err) {
      //   console.error(err);
      // }
  
      // handleClose();
    };

  // modal variable states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {Auth.loggedIn() ? (
        <>
          {/* <p className={`m-0 ${error ? "text-danger" : ""}`}>
            {error && <span className="ml-2">{error.message}</span>}
          </p> */}
          <Link >
            <MDBIcon onClick={handleShow} fas icon="pencil-alt" />
          </Link>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Title</Form.Label>
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

export default EditProjectModal;
