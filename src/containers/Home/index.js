import React from 'react';
import Layout from '../../components/Layout';
import { Col, Jumbotron, Row, Container } from 'react-bootstrap';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Home
**/

const Home = (props) => {

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <ul>
                <li><NavLink to={"/"} >Home</NavLink></li>
                <li><NavLink to={`/products`} >Products</NavLink></li>
                <li><NavLink to={`/orders`} >Orders</NavLink></li>     
            </ul>
          </Col>
          <Col md={10} style={{ marginLeft:'auto' }}>Container</Col>
        </Row>
      </Container>




      {/* <Jumbotron style={{margin:'5rem',background:'#fff'}} className="text-center">
            <h1>Welcome to admin Dashboard</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Jumbotron> */}
    </Layout>
  )

}

export default Home