import React from "react";
import { Card, ListGroup, Table } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container blogs my-5">
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h4 className="text-success my-3">
              Q1: Difference between Authentication and Authorization?
            </h4>
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Authentication</th>
                    <th>Authorization</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Authentication is a process that verify the user</td>
                    <td>
                      Authorization determine the resource that a user can
                      access
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      For authentication user needs to provide user information
                      and password
                    </td>
                    <td>Users get some access area based on user type</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>It depend on the information provided by user</td>
                    <td>
                      Authorization process maintained by the system terms and
                      rules of organization
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <h4 className="my-3 text-success">
              Q2: Why use Firebase? What other options do you have to implement
              authentication?
            </h4>
            <p>
              Firebase is used for give user a quick and intuitive
              authentication process. Along with authentication it can be used
              for monitor user activity and improve UI.
            </p>
            <h6>Other options to implement authentication:</h6>
            <ul>
              <li>Token based authentication.</li>
              <li>Standard authentication using user ID and password.</li>
              <li>Multi factor authentication. </li>
              <li>Social authentication.</li>
              <li>Password authentication.</li>
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <h4 className="my-3 text-success">
              Q3: What other services firebase provide except authentication?
            </h4>
            <p>Services of firebase includes:</p>
            <ul>
              <li>Realtime database.</li>
              <li>Hosting.</li>
              <li>Storage.</li>
              <li>Cloud functions.</li>
              <li>Predictions.</li>
              <li>Cloud Firestore.</li>
            </ul>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Blogs;
