import React from 'react';
import ccaclogo from './images/ccaclogo.jpg';
import BackButton from '../components/BackButton.jsx'
import {Container, Row, ButtonToolbar, Button} from 'react-bootstrap'
class CCACinfo extends React.Component{
    render(){
        return(
            <div>
                <h1>Chicago Children's Advocacy Center</h1>
                <img src ={ccaclogo} />
                <p> description</p>
            </div>
        );
    }
}

class ResourcesButton extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <a href="/resources"><Button type="submit">
                        Resources
                    </Button></a>
                      <a href ="/surveys"><Button type ="submit">
                      Surveys
                    </Button></a>
                </Row>
            </Container>

        );
    }
}

const MainAdultPage = () => {

	return (
        <div className = "mainAdultPage">
            <div >
                <h1>Adult Homepage</h1>
            </div>
            <CCACinfo/>
            <ResourcesButton/>
            <BackButton urlRoute="/"/>
        </div>
	);
}


export default MainAdultPage;
