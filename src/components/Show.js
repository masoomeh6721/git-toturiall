import React from 'react'
import { Badge, Container, Row, Spinner } from 'react-bootstrap'
import Card from './Card'

const Show = ({data, loading, error, select}) => {
  return (
    <div>
      {loading ? (<div style={{ height:"80vh",display:"flex" , justifyContent:"center", alignItems:"center" }}
      > <Spinner variant="info" animation="border" /> </div>)
      :error ? (<div style={{ height:"80vh",display:"flex" , justifyContent:"center", alignItems:"center"}}>
       <Badge bg="danger">{error.message} </Badge> 
      </div>) :
      (<Container>
        <Row>
        {data.map((item)=> <Card key={item.id} item={item} select={select}/>)}
        </Row>
      </Container>)
      }
    </div>
  )
}

export default Show
