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

class AddNewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      name: "",
      role: ""
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
                <Form className="add-new-post">
                  <FormInput
                    name="username"
                    size="lg"
                    className="mb-3"
                    placeholder="UserName"
                  />
                  <FormInput
                    name="password"
                    size="lg"
                    className="mb-3"
                    type="password"
                    placeholder="Password"
                  />
                  <FormInput
                    name="email"
                    size="lg"
                    className="mb-3"
                    placeholder="Email"
                  />
                  <FormInput
                    name="name"
                    size="lg"
                    className="mb-3"
                    placeholder="Full Name"
                  />
                  <label>Role</label>
                  <FormSelect size="md" className="mb-2" name="role">
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </FormSelect>
                </Form>
              </CardBody>
            </Card>
            <div>
              <Button size="lg" type="submit">
                Save
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddNewUser;
