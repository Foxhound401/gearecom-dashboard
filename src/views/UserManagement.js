import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button
} from "shards-react";

import moment from "moment";
import PageTitle from "../components/common/PageTitle";
import { getAllUsers } from "../components/api/UserFunction";

class UserManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getAllUsersFromDB = this.getAllUsersFromDB.bind(this);
  }

  getAllUsersFromDB() {
    getAllUsers().then(res => {
      this.setState({ data: res });
    });
  }

  componentDidMount() {
    this.getAllUsersFromDB();
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="User Management"
            subtitle="Management"
            className="text-sm-left"
          />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Active Users</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
                      <th scope="col" className="border-0">
                        Full Name
                      </th>
                      <th scope="col" className="border-0">
                        Email
                      </th>
                      <th scope="col" className="border-0">
                        Role
                      </th>
                      <th scope="col" className="border-0">
                        Birthday
                      </th>
                      <th scope="col" className="border-0">
                        Balance
                      </th>
                      <th scope="col" className="border-0">
                        Option
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td>{key + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.role}</td>
                          <td>{moment(item.birthday).format("MMM Do YY")}</td>
                          <td>{item.balance}</td>
                          <td>
                            <div>
                              <Button
                                outline
                                size="sm"
                                type="submit"
                                className="mr-2"
                              >
                                Edit
                              </Button>
                              <Button
                                outline
                                size="sm"
                                type="submit"
                                className="mr-2"
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const Buttons = {
  paddingRight: "10px"
};

export default UserManagement;
