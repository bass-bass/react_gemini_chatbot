import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBotHandler from '../chat/ChatBotHandler';

const Sample = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Sample Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* main */}
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            {/* カード */}
            <Card>
              <Card.Body>
                <Card.Title>Welcome to Sample Page</Card.Title>
                <Card.Text>
                  This is a simple example page made with React Bootstrap. Below you can find a sample form.
                </Card.Text>
              </Card.Body>
            </Card>

            {/* form */}
            <Form className="mt-4">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mt-2">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>

          {/* sidebar */}
          <Col md={4}>
            <Card className="mt-4 mt-md-0">
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                  We are a team dedicated to building responsive websites and applications with modern design.
                </Card.Text>
                <Button variant="secondary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* ChatBot */}
        <ChatBotHandler />
      </Container>

      {/* footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <Container>
          <p>&copy; {new Date().getFullYear()} Sample Page. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Sample;
