import React from 'react';
import {Card, Col, Button} from "react-bootstrap";
import Image from "react-bootstrap/esm/Image";
import {useHistory} from "react-router-dom"
import {SUPERHERO_ROUTE} from "../utils/consts";

const SuperheroItem = ({superhero}) => {
    const history = useHistory()
    return (
        <Col md={4} className={"mt-3"} onClick={() => history.push(SUPERHERO_ROUTE + '/' + superhero.id)}>
            <Card style={{width: 200, cursor: 'pointer'}} border={"light"}>
                <Image className='img' style={{width: 185, height: 200}} src={process.env.REACT_APP_API_URL + superhero.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-center align-items-center">
                    {/* <div className="d-flex align-items-center">
                        <button>Catch phrase is {superhero.catch_phrase}</button>
                        <div>{superhero.catch_phrase}</div>
                    </div> */}
                </div>
                <div>{superhero.name}</div>
            </Card>
        </Col>
    );
};

export default SuperheroItem;