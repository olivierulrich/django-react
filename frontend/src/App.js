import React, {Component} from "react";
import Testimonials from "./components/Testimonials";
import Container from 'react-bulma-components/lib/components/container';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {

    render() {
        return (
<div>

            <Navbar/>

            <Container fluid>

            <Testimonials/>

            </Container>

            <Footer/>
</div>

        )
    }

}

export default App;