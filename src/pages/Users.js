import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/action";
// import Card from "../components/Card";
import {
  Badge,
  Col,
  Container,
  Row,
  Spinner,
  Card,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import Show from "../components/Show";

function Users() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  console.log();

  return (
    <div>
      {loading ? (
        <div
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner variant="info" animation="border" />
        </div>
      ) : error ? (
        <div
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge bg="danger">{error}</Badge>
        </div>
      ) : (
        <Container>
          <Row>
            {data.map((item) => (
              <Col className="mb-4" key={item.id} xs="12" sm="6" md="4" lg="3">
                <Card>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {item.username}
                    </Card.Subtitle>
                    <Card.Text>{item.email}</Card.Text>
                    <Card.Text>{item.id}</Card.Text>
                    <Button
                      variant="dark"
                      onClick={() => Navigate(item.id.toString(),{state:{name:item.name}})}
                    >
                      posts
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Users;

// <Card key={item.id} item={item} select={select} />
// <Show
//   data={data}
//   loading={loading}
//   error={error}
//   // select={data[0] && Object.keys(data[0])}
// ></Show>

