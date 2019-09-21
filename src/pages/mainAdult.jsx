import React from 'react';
import ccaclogo from './images/ccaclogo.jpg';
import BackButton from '../components/BackButton.jsx';
import {Container, Row, Col, ButtonToolbar, Button, Image} from 'react-bootstrap';
import Pic from '../uploads/holding-hands.jpg';
import {renderNavBar} from '../global_components/header.jsx';


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
                            <p className="px-2"> Admiration stimulated cultivated reasonable be projection possession of. Real no near room ye bred sake if some. Is arranging furnished knowledge agreeable so. Fanny as smile up small. It vulgar chatty simple months turned oh at change of. Astonished set expression solicitude way admiration. 
                            Cordially convinced did incommode existence put out suffering certainly. Besides another and saw ferrars limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy see own shyness minuter. So before remark at depart. Did son unreserved themselves indulgence its. Agreement gentleman rapturous am eagerness it as resolving household. Direct wicket little of talked lasted formed or it. Sweetness consulted may prevailed for bed out sincerity. 
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
