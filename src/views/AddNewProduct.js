import React from "react";
import { Container, Row, Col, Button } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/NewProductEditor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
const AddNewProduct = () => (
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
      {/* Editor */}
      <Col lg="9" md="12">
        <Editor />
        <div>
          <Button size="lg" type="submit">Save</Button>
        </div>
      </Col>
    </Row>
  </Container>
);

export default AddNewProduct;
