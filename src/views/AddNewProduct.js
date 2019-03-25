import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Form,
  FormInput,
  FormSelect
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/NewProductEditor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import { getAllCategories } from "../components/api/CategoryFunction";
import { getAllManufacturers } from "../components/api/ManufacturerFunction";
import { addNewProduct } from "../components/api/ProductFunction";

class AddNewProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      manufacturers: [],
      name: "",
      price: "",
      quantity: "",
      manufacter: 1,
      category: 1
    };
    this.getAllCategoriesFromDB = this.getAllCategoriesFromDB.bind(this);
    this.getAllManufacturersFromDB = this.getAllManufacturersFromDB.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getAllCategoriesFromDB() {
    getAllCategories().then(res => {
      this.setState({ categories: res });
    });
  }

  getAllManufacturersFromDB() {
    getAllManufacturers().then(res => {
      this.setState({ manufacturers: res });
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("they click it");

    const product = {
      name: this.state.name,
      price: this.state.price,
      quantity: this.state.quantity,
      category: this.state.category,
      manufacter: this.state.manufacter
    };

    addNewProduct(product).then(res => {
      if (res) {
        this.props.history.push("/tables-products");
      }
    });
  }

  componentDidMount() {
    this.getAllCategoriesFromDB();
    this.getAllManufacturersFromDB();
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Add New Product"
            subtitle="ProductManagement"
            className="text-sm-left"
          />
        </Row>

        <Row>
          <Col lg="9" md="12">
            <Card small className="mb-3">
              <CardBody>
                <Form className="add-new-post" onSubmit={this.onSubmit}>
                  <FormInput
                    size="lg"
                    className="mb-3"
                    placeholder="Product Name"
                    name="name"
                    onChange={this.onChange}
                  />
                  <FormInput
                    name="price"
                    size="lg"
                    className="mb-3"
                    placeholder="Price"
                    onChange={this.onChange}
                  />
                  <FormInput
                    size="lg"
                    className="mb-3"
                    placeholder="Quantity"
                    name="quantity"
                    onChange={this.onChange}
                  />
                  <Row>
                    <Col className="col-lg mb-4">
                      <label htmlFor="#username">Manufacturer</label>
                      <FormSelect
                        name="idManufacturer"
                        size="md"
                        className="mb-2"
                        onChange={this.onChange}
                      >
                        {this.state.manufacturers.map((item, key) => {
                          return (
                            <option key={key} value={item.idmanufacter}>
                              {item.name}
                            </option>
                          );
                        })}
                      </FormSelect>
                    </Col>
                    <Col className="col-lg mb-4">
                      <label htmlFor="#username">Categories</label>
                      <FormSelect
                        name="category"
                        size="md"
                        className="mb-2"
                        onChange={this.onChange}
                      >
                        {this.state.categories.map((item, key) => {
                          return (
                            <option key={key} value={item.idcategory}>
                              {item.name}
                            </option>
                          );
                        })}
                      </FormSelect>
                    </Col>
                  </Row>

                  <Button size="lg" type="submit">
                    Save
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddNewProduct;
