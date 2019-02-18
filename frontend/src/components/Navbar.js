import React, {Component} from "react";
import '../_variables.sass'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Container from 'react-bulma-components/lib/components/container';
import Dropdown from 'react-bulma-components/lib/components/dropdown';
import logo from "../logo.png";

class TopNavbar extends Component {
    state = {active: false};

    handleClick = () => {
        const {active} = this.state;
        this.setState({active: !active});
    };

    render() {
        return (
            <Navbar
                fixed="top"
                transparent="transparent"
                active={this.state.active}
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
                            active={this.state.active}
                            onClick={this.handleClick}
                        />
                    </Navbar.Brand>
                    <Navbar.Menu>
                        <Navbar.Container>
                            <Navbar.Item href="#" className="is-size-2">Bunny's Buns</Navbar.Item>
                        </Navbar.Container>
                        <Navbar.Container position="end">
                            <Navbar.Item href="#">
                                Classes
                            </Navbar.Item>
                            <Navbar.Item href="#">
                                About Us
                            </Navbar.Item>
                            <Navbar.Item href="#">
                                Contact
                            </Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                </Container>
            </Navbar>
        );
    }
}

export default TopNavbar;