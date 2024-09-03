import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/action';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Badge, Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';

function Posts() {
    const dispatch = useDispatch();
    const Navigate=useNavigate();
    const {state:{name}}=useLocation();
    const {userId}=useParams();
    const { data, loading, error } = useSelector((state) => state.users);
    useEffect(() => {
      dispatch(getUsers(userId));
    }, []);
    console.log(data)
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
          <>
          <Badge bg="info" style={{fontSize:"2rem",marginBottom:"1.5rem"}}>{name}</Badge>
            <Container>
          <Row>
            {data.map((item) => (
              <Col className="mb-4" key={item.id}  xs="12" sm="6" md="4" lg="3">
              <Card style={{height:"66vh"}} >
                <Card.Body style={{display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
                  <Card.Title>{item.userId}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.id}
                  </Card.Subtitle>
                  <Card.Text>{item.title}</Card.Text>
                  <Card.Text>{item.body}</Card.Text>
                  <Button variant="dark" onClick={()=> Navigate((item.id).toString(),{state:{id:item.userId}})}>comment</Button>
                </Card.Body>
              </Card>
            </Col>
            ))}
          </Row>
        </Container>
        </>
      )}
    </div>

// <Card key={item.id} item={item} select={select} />
  )
}

export default Posts