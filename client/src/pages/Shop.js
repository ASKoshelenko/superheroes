import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import TypeBar from "../components/TypeBar";
import UniverseBar from "../components/UniverseBar";
import SuperheroList from "../components/SuperheroList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchUniverses, fetchSuperheros, fetchTypes} from "../http/superheroAPI";
import Pages from "../components/Pages";



const Shop = observer(() => {
    const {superhero} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => superhero.setTypes(data))
        fetchUniverses().then(data => superhero.setUniverses(data))
        fetchSuperheros(null, null, 1, 2).then(data => {
            superhero.setSuperheros(data.rows)
            superhero.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchSuperheros(superhero.selectedType.id, superhero.selectedUniverse.id, superhero.page, 5).then(data => {
            superhero.setSuperheros(data.rows)
            superhero.setTotalCount(data.count)
        })
    }, [superhero.page, superhero.selectedType, superhero.selectedUniverse,])

    return (
        <Container>
            <Row className="mt-2" >
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <UniverseBar/>
                    <SuperheroList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
