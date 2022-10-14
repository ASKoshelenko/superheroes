import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/esm/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createSuperhero, fetchUniverses, fetchTypes} from "../../http/superheroAPI";
import {observer} from "mobx-react-lite";

const CreateSuperhero = observer(({show, onHide}) => {
    const {superhero} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => superhero.setTypes(data))
        fetchUniverses().then(data => superhero.setUniverses(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addSuperhero = () => {
        const formData = new FormData()
        try{
            formData.append('name', name)
            formData.append('img', file)
            formData.append('universeId', superhero.selectedUniverse.id)
            formData.append('typeId', superhero.selectedType.id)
            formData.append('info', JSON.stringify(info))
            createSuperhero(formData).then(data => onHide())
        } catch(e){
            alert(e)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add superhero
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{superhero.selectedType.name || "Select type"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {superhero.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => superhero.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{superhero.selectedUniverse.name || "Select universe"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {superhero.universes.map(universe =>
                                <Dropdown.Item
                                    onClick={() => superhero.setSelectedUniverse(universe)}
                                    key={universe.id}
                                >
                                    {universe.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Enter superhero name"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Add new characteristic
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Enter characteristic name"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Enter characteristic description"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-success" onClick={addSuperhero}>Add</Button>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateSuperhero;
