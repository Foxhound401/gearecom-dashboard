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
                      <th scope="col" className="border-0 ">
                        #
                      </th>
                      <th scope="col" className="border-0 w-50">
                        Product Name
                      </th>
                      <th scope="col" className="border-0">
                        Price
                      </th>
                      <th scope="col" className="border-0">
                        Category
                      </th>
                      <th scope="col" className="border-0">
                        Manufacturer
                      </th>
                      <th scope="col" className="border-0">
                        Quantity
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
                          <td className="w-50">{item.ProductName}</td>
                          <td>{item.price}</td>
                          <td>{item.Category}</td>
                          <td>{item.Manufacturer}</td>
                          <td>{item.quantity}</td>
                          <td>
                            <div>
                              <Button
                                outline
                                size="sm"
                                type="submit"
                                className="mr-4"
                              >
                                Edit
                              </Button>
                              <Button
                                outline
                                size="sm"
                                type="submit"
                                className="mr-4"
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

export default ProductManagement;
