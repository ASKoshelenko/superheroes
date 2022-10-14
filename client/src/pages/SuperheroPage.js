import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import {addToFavourites, fetchOneSuperhero} from "../http/superheroAPI";

const SuperheroPage = () => {
    const [superhero, setSuperhero] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneSuperhero(id).then(data => setSuperhero(data))
    }, [])

    const add = () => {
        const formData = new FormData()
        formData.append('superheroId', id)
        addToFavourites(formData).then(response => alert(`Superhero ` + superhero.name + ` added in favourites!`))
    }

    const speak = () => {
        alert(superhero.catch_phrase)
    }


    return (
        <Container className="mt-3">
            <Row>
                <Col md={6}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 200, fontSize: 32, border: 'white'}}
                    >
                        <h1><b>{superhero.name}</b></h1>
                        <Button>Change info</Button>

                    </Card>
                </Col>
                <Col md={6}>
                    <Image width={400} height={400} src={process.env.REACT_APP_API_URL + superhero.img}/>
                </Col>
                
            </Row><br/>
            <Row className="d-flex flex-column m-3">
                <h2><b>About superhero</b></h2>
                <Row>
                    <h3>Real name: {superhero.real_name} </h3>
                </Row>
                <Row>
                    <h4>{`Origin description:  `} {superhero.origin_description}</h4> 
                </Row>
                <Row>
                    <h4>{`Catch phrase:  `} {superhero.catch_phrase}</h4>
                </Row>
                <Row>
                    <h4>{`Super powers:  `} {superhero.super_powers}</h4>
                </Row>
            </Row>
        </Container>
    );
};
export default SuperheroPage;
