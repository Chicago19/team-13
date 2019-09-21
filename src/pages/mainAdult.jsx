import React from 'react';
import ccaclogo from './images/ccaclogo.jpg';
import BackButton from '../components/BackButton.jsx';
import {Container, Row, Col, ButtonToolbar, Button, Image} from 'react-bootstrap';
import Pic from '../uploads/holding-hands.jpg';
import {renderNavBar} from '../global_components/header.jsx';
import './css/mainAdult.css';

class CCACinfo extends React.Component{
    render(){
        return(
            <>
                <div>
                    <Row>
                        <Col>
                            {renderNavBar("About Us")}
                        </Col>       
                    </Row>
                </div>
                
                <Image src={Pic} className="max-width"/>
            
                <Row>
                    <Col>
                        <div className="background-color">
                            <p className="px-2"> Our mission
Uniting public, private and community partners to ensure the safety, health and well-being of abused children. <br></br>

Our shared vision
To eliminate the suffering of abused children in Chicago.
<br></br>
Our core values
Freedom from abuse and exploitation is a basic human right.
The center is a safe place for everyone who enters its doors.
The collaborative process is the best approach to prevent and respond to child abuse.
Our children and families deserve to receive the highest standard of care available.
Best-practice interventions can restore lives.
                            </p>
                        </div>
                    </Col>
                </Row>
            </>
            
        );
    }
}

class ResourcesButton extends React.Component{
    render(){
        return( 
            <Row>
                <Col align="right">
                    <a href="/resources">
                        <Button type="submit" >
                            Resources
                        </Button>
                    </a>
                </Col>
                <Col align="left" className = "mx-3 px-3">
                    <a href ="/surveys">
                        <Button type ="submit" >
                            Surveys
                        </Button>
                    </a>
                </Col>
            </Row>
        );
    }
}

const MainAdultPage = () => {

	return (
        <div className = "mainAdultPage">
            
            <CCACinfo/>
            <ResourcesButton/>
            <BackButton urlRoute="/"/>
        </div>
	);
}


export default MainAdultPage;
