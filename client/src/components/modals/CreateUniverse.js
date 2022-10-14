import React, {useState} from 'react';
import Modal from "react-bootstrap/esm/Modal";
import {Button, Form} from "react-bootstrap";
import {createUniverse} from "../../http/superheroAPI";

const CreateUniverse = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addUniverse = () => {
        createUniverse({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Universe
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Enter universe name"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addUniverse}>Add</Button>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateUniverse;
