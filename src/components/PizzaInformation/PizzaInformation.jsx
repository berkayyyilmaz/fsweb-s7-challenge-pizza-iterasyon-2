import React from 'react'
import pizzaInfo from '../../data/pizzaInfo.json'
import {Col, Row, Container} from 'reactstrap'
import './PizzaInformation.css'

function PizzaInformation() {
  return (
    <div>
        <div className='pizza-name'><h2>{pizzaInfo.name}</h2></div>
        <Row className='price-rate-vote'>
        <Col xs='7' className='price'><p>{pizzaInfo.price}₺</p></Col>
        <Col xs='3'><p>{pizzaInfo.rate}</p></Col>
        <Col xs='2'><p>({pizzaInfo.voteCount})</p></Col>
        </Row>
        <p className='description'>{pizzaInfo.description}</p>
    </div>
  )
}

export default PizzaInformation