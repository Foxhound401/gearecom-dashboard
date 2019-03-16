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
import { login } from "../components/api/UserFunction";
import BackgroundImage from "../images/background/background.png";

class LoginDashboard extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    login(user).then(res => {
      if (res) {
        this.props.history.push(`/dashboard-overview`);
      }
    });
  }

  render() {
    return (
      <div style={Parent}>
        <div style={InputSection}>
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
                  <label>Email</label>
                  <FormGroup>
                    <FormInput
                      id="#email"
                      name="email"
                      placeholder="Email"
                      onChange={this.onChange}
                    />
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
        </div>
      </div>
    );
  }
}

const loginComponent = {
  margin: "10px 10px 10px 10px"
};
const InputSection = {
  backgroundColor: "#f2f2f2",
  marginTop: "15%",
  marginRight: "25%",
  marginLeft: "25%",
  border: "medium dashed #666666"
};
const Parent = {
  position: "Fixed",
  padding: 0,
  margin: 0,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};
export default LoginDashboard;
