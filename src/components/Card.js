import React from 'react'
import { Button, Card as CARD, Col} from "react-bootstrap"
const Card  = ({item , select }) => {
  console.log (typeof select[4])
  return (
    <Col className='mb-4 '>
    <CARD style={{ width: '18rem' }}>
      <CARD.Body>
        <CARD.Title>{item[select[0]]}</CARD.Title>
        <CARD.Subtitle className="mb-2 text-muted">{item[select[1]]}</CARD.Subtitle>
        <CARD.Text> {item[select[2]]}</CARD.Text>
        <CARD.Text> {item[select[3]]}</CARD.Text>
        {select[4] && typeof item[select[4]]=== "string"? <CARD.Text> {item[select[4]]}</CARD.Text> :""}
     <Button variant='dark'>posts</Button>
      </CARD.Body>
    </CARD>
    </Col>
  )
}

export default Card
