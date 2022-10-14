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
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: 'white'}}
                    >
                        <h1><b>{superhero.name}</b></h1>

                    </Card>
                </Col>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + superhero.img}/>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>Real name: {superhero.real_name} </h3>
                        {/* <Button variant={"outline-dark"} onClick={add} >Add to favourite</Button> */}
                        {/* <Button variant={"outline-dark"} onClick={speak} >Speak</Button> */}

                    </Card>
                </Col>
            </Row><br/>
            <Row className="d-flex flex-column m-3">
                <h2><b>Description</b></h2>
                {superhero.info.map((info, index) =>
                    <Row key={info.id} style={{border: '2px solid lightgray', background: index % 2 === 0 ? 'seashell' : 'azure', padding: 10}}>
                        <b>{info.title}:</b><i>{info.description}</i>
                    </Row>
                )}
            </Row>
        </Container>
    );
};
export default SuperheroPage;
