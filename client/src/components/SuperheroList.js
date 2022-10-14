import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import SuperheroItem from "./SuperheroItem";

const SuperheroList = observer(() => {
    const {superhero} = useContext(Context)

    return (
        <Row className="d-flex">
            {superhero.superheros.map(superhero =>
                <SuperheroItem key={superhero.id} superhero={superhero}/>
            )}
        </Row>
    );
});

export default SuperheroList;
