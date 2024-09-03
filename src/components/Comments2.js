import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../redux/action';
import { Badge, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

function Comments() {
    const dispatch = useDispatch();
    const {postId}=useParams();
    const {state:{id}}=useLocation();
    const { data, loading, error } = useSelector((state) => state.comments);
    useEffect(() => {
      dispatch(getComments(postId));
    }, []);
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
      ) : (<>
        <Badge bg="info" style={{fontSize:"2rem",marginBottom:"1.5rem"}}>{id}</Badge>
        <Container>
          <Row>
            {data.map((item) => (
              <Col className="mb-4" key={item.id}  xs="12" sm="6" md="4" lg="3" >
              <Card style={{height:"55vh"}}>
                <Card.Body style={{display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
                  <Card.Title>{item.postId}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.id}
                  </Card.Subtitle>
                  <Card.Text>{item.name}</Card.Text>
                  <Card.Text>{item.email}</Card.Text>
                  <Card.Text>{item.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            ))}
          </Row>
        </Container>
        </>
      )}
    </div>
  )
}

export default Comments