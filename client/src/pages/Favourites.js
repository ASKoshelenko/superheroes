import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { getFavourites } from '../http/superheroAPI';

import { Card, Col, Container, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';


const Favourites = observer(() => {
    const {superhero} = useContext(Context)

    useEffect(() => {
        getFavourites().then(data => superhero.setFavourites(data))
    }, [])

    return (
        <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3"
        >
            <h1 className="pb-2">Favourite superheroes</h1>
              {superhero.favourites.map(product =>
                <Card className="d-flex w-100 p-2 justify-content-center mb-2" key={product.id}>
                    <Row className="d-flex w-100">
                        <Col>
                            <div className="d-flex flex-row align-items-center">
                                <img src={process.env.REACT_APP_API_URL + product.superhero.img} width={50} />
                                <h1 className="pl-3">{product.superhero.name}</h1>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                <h2 className="font-weight-light">{product.superhero.info}</h2>
                            </div>
                        </Col>
                    </Row>

                </Card>
            )}
        </Container>
    );
});

export default Favourites;
