import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  Container,
  Button
} from "shards-react";
import { login } from '../components/api/UserFunction'

//const LoginDashboard = () => (
//  <Container>
//    <Row style={loginComponent}>
//      <Col
//        xs={{ size: 8, order: 2, offset: 2 }}
//        sm={{ size: 7, order: 2, offset: 2 }}
//      >
//        <label>
//          <strong className="text-muted">Login</strong>
//        </label>
//        <Form>
//          <label>Username</label>
//          <FormGroup>
//            <FormInput id="#username" placeholder="Username" />
//          </FormGroup>
//          <label>Password</label>
//          <FormGroup>
//            <FormInput type="password" id="$password" placeholder="Password" />
//          </FormGroup>
//          <Button outline pill size="md">
//            Login to Dashboard
//          </Button>
//        </Form>
//      </Col>
//    </Row>
//  </Container>
//);

class LoginDashboard extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }
    login(user).then(res => {
        this.props.history.push(`/dashboard-overview`)
    })
  }

  render() {
    return (
      <Container>
        <Row style={loginComponent}>
          <Col
            xs={{ size: 8, order: 2, offset: 2 }}
            sm={{ size: 7, order: 2, offset: 2 }}
          >
            <label>
              <strong className="text-muted">Please sign in</strong>
            </label>
            <Form onSubmit={this.onSubmit}>
              <label>Username</label>
              <FormGroup>
                <FormInput id="#username" name="email" placeholder="Username"  onChange={this.onChange} />
              </FormGroup>
              <label>Password</label>
              <FormGroup>
                <FormInput
                  type="password"
                  id="$password"
                  placeholder="Password"
                  name="password"
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button outline pill size="md" type="submit">
                Login to Dashboard
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const loginComponent = {
  marginTop: "25%"
};

export default LoginDashboard;
