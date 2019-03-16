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

import PageTitle from "../components/common/PageTitle";
import { getAllProducts } from "../components/api/ProductFunction";

class ProductManagement extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.getAllProductsFromDB = this.getAllProductsFromDB.bind(this);
  }

  getAllProductsFromDB() {
    getAllProducts().then(res => {
      this.setState({ data: res });
    });
  }

  componentDidMount() {
    this.getAllProductsFromDB();
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Product Management"
            subtitle="Management"
            className="text-sm-left"
          />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Active Product</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
                      <th scope="col" className="border-0">
                        First Name
                      </th>
                      <th scope="col" className="border-0">
                        Last Name
                      </th>
                      <th scope="col" className="border-0">
                        Country
                      </th>
                      <th scope="col" className="border-0">
                        City
                      </th>
                      <th scope="col" className="border-0">
                        Phone
                      </th>
                      <th scope="col" className="border-0">
                        Option
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ali</td>
                      <td>Kerry</td>
                      <td>Russian Federation</td>
                      <td>Gdańsk</td>
                      <td>107-0339</td>
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

export default ProductManagement;
