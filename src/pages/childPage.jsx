import React from 'react';
import { Row, Col, Container, Button, ButtonToolbar } from 'react-bootstrap';

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
                    <ButtonToolbar className>
                        <Button variant="primary">Yeet</Button>
                        <Button variant="secondary">Yote</Button>
                        <Button variant="success">Yought</Button>
                    </ButtonToolbar>
                </Row>
            </Container>
        )
    }
}