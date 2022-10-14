import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const UniverseBar = observer(() => {
    const {superhero} = useContext(Context)

    return (
        <Row className="universebar">
            {superhero.universes.map(universe =>
                <Card
                    style={{cursor:'pointer'}}
                    key={universe.id}
                    className="card"
                    onClick={() => superhero.setSelectedUniverse(universe)}
                    border={universe.id === superhero.selectedUniverse.id ? 'dark' : 'light'}
                >
                    {universe.name}
                </Card>
            )}
        </Row>
    );
});

export default UniverseBar