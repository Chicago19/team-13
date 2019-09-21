import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

//css
import './css/frontpage.css';
//images
import Parent from '../uploads/parents.jpg';
import Children from '../uploads/children.jpg';
class FrontPage extends React.Component{
  render(){
    return(
      
        <div className="max-width">
          <Row>
            <Col className="no-padding max-width">
              <a href="/claireslittyreactpage">
                <Image src={Parent} className="max-width"/>
                <h1 className="center color-green">Parent</h1>
              </a>
            </Col>
            <Col className="no-padding max-width">
              <a href="/games">
                <Image src={Children} className="max-width"/>
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
