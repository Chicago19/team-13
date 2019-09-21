import React from 'react';
import { Row, Col, Container, Button, ButtonToolbar } from 'react-bootstrap';
import {mahjong} from './images/animalmahjong.jpg';
const renderButton = (props) =>{
    return(
        <Button>props</Button>
    )
}

export default class childPage extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    {/* <ButtonToolbar className> */}
                        <input type ="image" src= {mahjong}/>
                        <Button variant="secondary">Yote</Button>
                        <Button variant="success">Yought</Button>
                    {/* </ButtonToolbar> */}
                </Row>
                <embed width="800" height="600" src="https://cdn.htmlgames.com/FruitCubes/" ></embed>
            </Container>
        )
    }
}