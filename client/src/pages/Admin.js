import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateUniverse from "../components/modals/CreateUniverse";
import CreateSuperhero from "../components/modals/CreateSuperhero";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [universeVisible, setUniverseVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [superheroVisible, setSuperheroVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-light"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Add Type
            </Button>
            <Button
                variant={"outline-light"}
                className="mt-4 p-2"
                onClick={() => setUniverseVisible(true)}
            >
                Add Universe
            </Button>
            <Button
                variant={"outline-light"}
                className="mt-4 p-2"
                onClick={() => setSuperheroVisible(true)}
            >
                Add Superhero
            </Button>
            <CreateUniverse show={universeVisible} onHide={() => setUniverseVisible(false)}/>
            <CreateSuperhero show={superheroVisible} onHide={() => setSuperheroVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
