import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/esm/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, FAVOURITES_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/esm/Container";
import {useHistory} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import icon from '../img/icon.png'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
    }

    return (
        <Navbar className="navbar">
            <Container>
                <NavLink className="d-flex row align-items-center ml-4"  style={{color:'white'}} to={SHOP_ROUTE}
                ><b>Superheroes aroud us</b>
                <Image width={35} height={25} src={icon}></Image>
                </NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            className="mr-2"
                            onClick={() => history.push(FAVOURITES_ROUTE)}
                        >
                            Favourites
                        </Button>
                        {user.isAdmin ?
                            <Button
                                variant={"outline-light"}
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Admin
                            </Button>
                            :
                            <div></div>
                        }
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut(localStorage.removeItem('token'))}
                            className="ml-2"
                        >
                            Logout
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Login</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
