import React from 'react';
import { Row, Col, Container, Button, ButtonToolbar } from 'react-bootstrap';
import {mahjong} from './images/mahjong.jpg';
import { thisExpression } from '@babel/types';
import BackButton from '../components/BackButton.jsx';
import {renderNavBar} from '../global_components/header.jsx';
import './css/child.css';
//https://cdn.htmlgames.com/DailyCrossword/
//https://cdn.htmlgames.com/HugeSpiderSolitaire/
//https://cdn.htmlgames.com/AnimalMahjong/



export default class childPage extends React.Component{

    render(){
        return(
            <Container>
            {renderNavBar("Games")}
                <Row>
                    {/* <ButtonToolbar className> */}
                        <a href="/games"><Button variant="primary" >Fruit Cubes</Button></a>
                        <a href="/games1"><Button variant="secondary" >Daily Crossword</Button></a>
                        <a href="/games2"><Button variant="success">Huge Spider Solitaire</Button></a>
                        <a href="/games3"><Button variant="warning">Animal Mahjong</Button></a>
                    {/* </ButtonToolbar> */}
                </Row>
                <embed width="800" height="600" src="https://cdn.htmlgames.com/FruitCubes/" ></embed>

                <BackButton urlRoute="/"></BackButton>
            </Container>
        )
    }
}
