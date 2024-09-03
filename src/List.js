import React from 'react'
import { Button, Card, CloseButton, Col, Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

function List({task,setTask}) {

    const deleteTask = (index) =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            setTask((last)=>{ const result =[...last]
              result.splice(index,1)
            return [...result]}) 
          }
        });
      
      }
      
      const changeStatus= (index)=>{
        setTask ((last)=> {
         const temp = JSON.parse(JSON.stringify(last))
         temp[index].status=!(temp[index].status);
         return [...temp]; 
       }) ;
       };

  return (
    <div>
 <Container>
  <Row>
{task.map((item,index) => 
    <Col  key={index} xs={4}>
  <Card
  bg={item.status ?  "success" : "danger"}
  text="white"
  // style={{ width: '18rem' }}
  className="mb-2"
>
  <Card.Body>
    <Container>
      <Row>
        <Col xs={{span:"1",offset:"10"}}>
         <CloseButton  onClick={()=> deleteTask(index)}/>
        </Col>
      </Row>
    </Container>
    <Card.Text>{item.text} </Card.Text>
    <Button variant={item.status? "danger":"success"}onClick={()=> changeStatus(index)} >
      {task[index].status? "undon":"done"}</Button>
  </Card.Body>
</Card>
  
  </Col>
  )
}
  </Row>
  </Container>
    </div>
  )
}

export default List