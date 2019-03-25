import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormInput,
  FormSelect,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/NewUserEditor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import DatePicker from "../components/common/RangeDatePicker";
import { register } from "../components/api/UserFunction";

class AddNewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      name: "",
      role: "admin"
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("click in User");

    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      name: this.state.name,
      role: this.state.role
    };

    register(user).then(res => {
      console.log(" returned: " + res);
      if (res) {
        this.props.history.push("/tables-users");
      }
    });
  }
  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Add New User"
            subtitle="UserManagement"
            className="text-sm-left"
          />
        </Row>

        <Row>
          {/* Editor */}
          <Col lg="9" md="12">
            <Card small className="mb-3">
              <CardBody>
                <Form className="add-new-post" onSubmit={this.onSubmit}>
                  <FormInput
                    name="username"
                    size="lg"
                    className="mb-3"
                    placeholder="UserName"
                    onChange={this.onChange}
                  />
                  <FormInput
                    name="password"
                    size="lg"
                    className="mb-3"
                    type="password"
                    placeholder="Password"
                    onChange={this.onChange}
                  />
                  <FormInput
                    name="email"
                    size="lg"
                    className="mb-3"
                    placeholder="Email"
                    onChange={this.onChange}
                  />
                  <FormInput
                    name="name"
                    size="lg"
                    className="mb-3"
                    placeholder="Full Name"
                    onChange={this.onChange}
                  />
                  <label>Role</label>
                  <FormSelect
                    size="md"
                    className="mb-2"
                    name="role"
                    onChange={this.onChange}
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </FormSelect>
                  <div>
                    <Button size="lg" type="submit">
                      Save
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddNewUser;
