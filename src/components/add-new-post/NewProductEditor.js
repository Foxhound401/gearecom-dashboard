import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, FormSelect } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Product Name" />
        <FormInput size="lg" className="mb-3" placeholder="Price" />
        <FormInput size="lg" className="mb-3" placeholder="Quantity" />
        <label htmlFor="#username">Manufactor</label>
        <FormSelect size="lg" className="mb-2">
          <option value="first">Samsung</option>
          <option value="second">Blablabla</option>
        </FormSelect>
        <label htmlFor="#username">Categories</label>
        <FormSelect size="lg" className="mb-2">
          <option value="first">Laptop</option>
          <option value="second">Blablabla</option>
        </FormSelect>
      </Form>
    </CardBody>
  </Card>
);

export default Editor;
