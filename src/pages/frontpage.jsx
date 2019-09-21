import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

//css
import './css/frontpage.css';
//images
import Parent from '../uploads/parents.jpg';
import Children from '../uploads/children.jpg';
import logo from './images/ccaclogo.jpg';
class FrontPage extends React.Component{
  render(){
    return(

      
        <div>
          <Row>
            <Col className="no-padding max-width">
              <a href="/login">
                <Image src={Parent} className="max-width filter"/>
                <h1 className="center color-green">Parent</h1>
                <Image src={logo} className="upper-left" roundedCircle/>
              </a>
            </Col>
            <Col className="no-padding max-width">
              <a href="/games">
                <Image src={Children} className="max-width filter"/>
                <h1 className="center color-purple">Children</h1>
              </a>
            </Col>
          </Row>
        </div>
      
      );
  }
}

const Front = () => {
  return (
    <div>
      <FrontPage/>
    </div>
    );
}


export default Front;
