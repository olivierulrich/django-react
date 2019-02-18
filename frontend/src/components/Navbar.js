import React, {Component} from "react";
import '../_variables.sass'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Container from 'react-bulma-components/lib/components/container'
import logo from "../logo.png";

class TopNavbar extends Component {
    render() {
        return (
            <Navbar
                fixed="top"
                transparent="transparent"
            >
                <Container fluid>
                <Navbar.Brand
                >
                    <Navbar.Item renderAs="a" href="#">
                        <img
                            src={logo}
                            alt="Bunny's Buns"
                            width="144"
                        />
                    </Navbar.Item>
                    <Navbar.Burger
                    />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container>
                        <Navbar.Item href="#" className="is-size-2">Bunny's Buns</Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container position="end">
                        <Navbar.Item href="#">At the end</Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
                </Container>
            </Navbar>
        );
    }
}

export default TopNavbar;