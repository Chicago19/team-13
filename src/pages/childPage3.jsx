import React from 'react';
import { Row, Col, Container, Button, ButtonToolbar } from 'react-bootstrap';
import BackButton from '../components/BackButton.jsx';
import {renderNavBar} from '../global_components/header.jsx';
import './css/child.css'
const renderButton = (props) =>{
    return(
        <Button>props</Button>
    )
}

export default class childPage3 extends React.Component{
    render(){
        return(
            <>
                <div>
                    {renderNavBar("Games")}
                </div>
                <Container>
                
                    <Row>
                        {/* <ButtonToolbar className> */}
                            <a href="/games"><Button variant="primary" >Fruit Cubes</Button></a>
                            <a href="/games1"><Button variant="secondary" >Daily Crossword</Button></a>
                            <a href="/games2"><Button variant="success">Huge Spider Solitaire</Button></a>
                            <a href="/games3"><Button variant="warning">Animal Mahjong</Button></a>
                        {/* </ButtonToolbar> */}
                    </Row>
                    <div className="game-spacing">
                        <embed width="800" height="600" src="https://cdn.htmlgames.com/AnimalMahjong/"></embed>
                    </div>
                    <BackButton urlRoute="/"></BackButton>
                </Container>
            </>
        )
    }
}
