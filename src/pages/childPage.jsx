import React from 'react';
import { Row, Col, Container, Button, ButtonToolbar } from 'react-bootstrap';
import {mahjong} from './images/mahjong.jpg';
import { thisExpression } from '@babel/types';

//https://cdn.htmlgames.com/DailyCrossword/
//https://cdn.htmlgames.com/HugeSpiderSolitaire/
//https://cdn.htmlgames.com/AnimalMahjong/



export default class childPage extends React.Component{
    
    render(){
        return(
            <Container>
                <Row>
                    {/* <ButtonToolbar className> */}
                        <Button variant = "primary" >Yeet</Button>
                        <Button variant="secondary" >Yote</Button>
                        <Button variant="success">Yought</Button>
                    {/* </ButtonToolbar> */}
                </Row>
                <embed width="800" height="600" src="https://cdn.htmlgames.com/FruitCubes/" ></embed>
            </Container>
        )
    }
}