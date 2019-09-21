import React from 'react';
import ccaclogo from './images/ccaclogo.jpg';
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
                    <Button type="submit">
                        <a href="/resources">Resources</a>
                    </Button>
                    <Button type ="submit">
                        <a href ="/surveys">Surveys</a>
                    </Button>
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
        </div>
	);
}


export default MainAdultPage;
