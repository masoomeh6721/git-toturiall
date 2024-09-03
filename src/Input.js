import React, { useState } from 'react';
import { Button, Col, Form, Row ,Container} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';


function Input({setTask}) {
    const [help,setHelp]=useState("");

    const addtask= ()=> {if (help.trim()){
        setTask((last)=>  [...last,{text:help,status:false}]);
       toast("task has been addaed",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type:"default"
        })
      } setHelp("");
      
        
      }
  return (
    <div>
         <Form onSubmit={(e)=> e.preventDefault()}>
    <Container>
      <Row>
        <Col xs={{span:4, offset:3}}> 
        <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter your task" value={help} onChange={(e)=> setHelp(e.target.value)} />
      </Form.Group>
        </Col>
        <Col xs={2}><Button variant="primary" type="submit" onClick={()=>addtask()}>
       add
      </Button></Col>
      </Row>
      
    </Container>
    </Form>
    <ToastContainer />
    </div>
  )
}

export default Input