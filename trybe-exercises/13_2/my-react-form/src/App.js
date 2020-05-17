import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
    this.handleFName = this.handleFName.bind(this);
    this.insertData = this.insertData.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  clearAll(e) {
    const initialState = {};
    this.setState(initialState);
    console.log('Cleared!');
  }

  handleFName(e) {
    e.target.value = e.target.value.toUpperCase();
    this.insertData(e);
  };

  insertData(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    const { lname, fname } = this.state;
    return (
      <div>
        <Container>
          <Form style={{ marginTop: 20 }}>
            <Form.Group controlId="name-surname">
              <Form.Label>First Name</Form.Label>
              <Form.Control name="fname" required="on" autoComplete="off" onChange={this.handleFName} type="text" placeholder="First name" />
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" onChange={this.insertData} type="email" placeholder="Email" />
            </Form.Group>
            <Button type="submit">Send</Button>
            <br />
            <br />
            <Button onClick={this.clearAll}>Clear</Button>
          </Form>
        </Container>
      </div>
    );
  }

}

export default App;
