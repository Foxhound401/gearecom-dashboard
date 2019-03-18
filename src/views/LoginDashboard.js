import React from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  Container
} from "shards-react";

const LoginDashboard = () => (
  <Container>
      <Row>
           <Col sm={{ size: 8, order: 2, offset: 2 }} md={{ size: 8, order: 2, offset: 2 }} lg={{ size: 8, order: 2, offset: 2 }}>
           <Row>
              <strong className="text-muted d-block mb-2">Login</strong>
           </Row>
           <Row>
             <Form>
               <label>
                 Username
               </label>
               <FormGroup>
                 <FormInput id="#username" placeholder="Username"/>
               </FormGroup>
               <label>
                 Password
               </label>
               <FormGroup>
                <FormInput type="password" id="$password" placeholder="Password" />
               </FormGroup>
             </Form>
           </Row>
           </Col>
      </Row>
  </Container>
);

export default LoginDashboard;
