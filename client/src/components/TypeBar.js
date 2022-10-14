import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
//import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/esm/ListGroup";

const TypeBar = observer(() => {
    const {superhero} = useContext(Context)
    return (
        <ListGroup>
            {superhero.types.map(type =>
                <ListGroup.Item
                    className='typebar'
                    active={type.id === superhero.selectedType.id}
                    onClick={() => superhero.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
