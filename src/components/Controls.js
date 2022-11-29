import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Controls = (props) => {
  return (
    <div data-testid="controls-testid">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="/"> Sorting Visualizer </Navbar.Brand>
          <Nav className="mr-auto">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav.Link onClick={() => props.quickSort()}> Quick Sort </Nav.Link>
            <Nav.Link onClick={() => props.mergeSort()}> Merge Sort </Nav.Link>
            <Nav.Link onClick={() => props.heapSort()}> Heap Sort </Nav.Link>
          </Nav>
          <Button
            variant="outline-info"
            size="sm"
            onClick={() => props.resetArray()}
          >
            Generate New Array
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Controls;
