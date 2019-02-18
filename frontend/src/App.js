import React, {Component} from "react";
import Testimonials from "./components/Testimonials";
import Container from 'react-bulma-components/lib/components/container';
import TopNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Images from "./components/Images";

class App extends Component {

    render() {
        return (
            <div>

                <TopNavbar/>

                <Images/>

                <Container fluid>


                    <Testimonials/>

                </Container>

                <Footer/>
            </div>

        )
    }

}

export default App;