import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Container, Row, Col } from 'reactstrap';


const Header = ({handleMenuClick}) => {
  return (
    <div>
    <Container fluid><h1 className='header'>Teknolojik Yemekler</h1></Container>
    <Container fluid>
    <Row>
        <Col xs="4" className='nav-blank'></Col>
        <Col xs="4" className='navigation'>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Anasayfa
          </NavLink>
        </li>
        <span className='seperator'>-</span>
        <li>
        <NavLink className="menu-link" to="#" onClick={handleMenuClick}>Seçenekler</NavLink>
        </li>
        <span className='seperator'>-</span>
        <li>
          <NavLink to="/order" activeClassName="active">
            Sipariş Oluştur
          </NavLink>
        </li>
      </ul>
    </nav>
        </Col>
        <Col xs="4" className='nav-blank'></Col>
    </Row>
    </Container>
    </div>
  );
};

export default Header;
