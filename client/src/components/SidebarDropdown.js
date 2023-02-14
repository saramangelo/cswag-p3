import Accordion from "react-bootstrap/Accordion";

function SidebarDropdown() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Projects</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SidebarDropdown;
