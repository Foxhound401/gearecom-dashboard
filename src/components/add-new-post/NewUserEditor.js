import React from "react";
import ReactQuill from "react-quill";
import {
  Form,
  FormInput,
  FormSelect,
  Button
} from "shards-react";


import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
 
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="UserName" />
        <FormInput size="lg" className="mb-3" placeholder="Password" />
        <FormInput size="lg" className="mb-3" placeholder="Email" />
        <label>Role</label>
        <FormSelect size="md" className="mb-2">
          <option value="first">Admin</option>
          <option value="second">User</option>
        </FormSelect>
        <FormInput size="lg" className="mb-3" placeholder="FullName" />

      </Form>
);


export default Editor;
