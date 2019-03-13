import React from "react";
import {
  Container, Row, Col, Button, Card,
  CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/NewUserEditor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import DatePicker from "../components/common/RangeDatePicker"

const AddNewUser = () => (
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
            <Editor />
            <DatePicker/>
          </CardBody>
          </Card>
        <div>
          <Button size="lg" type="submit">Save</Button>
        </div>
      </Col>
    </Row>
  </Container>
);

export default AddNewUser;
