import React from 'react';
import { Row, Col, Container, Button, ButtonToolbar } from 'react-bootstrap';

const renderButton = (props) =>{
    return(
        <Button>props</Button>
    )
}

export default class childPage3 extends React.Component{
    render(){
        return(
            <Container>
            <Row>
                {/* <ButtonToolbar className> */}
                    <a href="/games"><Button variant="primary" >Fruit Cubes</Button></a>
                    <a href="/games1"><Button variant="secondary" >Daily Crossword</Button></a>
                    <a href="/games2"><Button variant="success">Huge Spider Solitaire</Button></a>
                    <a href="/games3"><Button variant="warning">Animal Mahjong</Button></a>
                {/* </ButtonToolbar> */}
            </Row>
                <embed width="800" height="600" src="https://cdn.htmlgames.com/AnimalMahjong/"></embed>
            </Container>
        )
    }
}
