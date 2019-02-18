import React, {Component} from "react";
import Testimonials from "./components/Testimonials";
import Container from 'react-bulma-components/lib/components/container';
import TopNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Images from "./components/Images";
import Loader from 'react-loading-spinner';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        this.setState({isLoading: false})
    }

    render() {


        return this.state.isLoading ? <Loader type="Puff" color="blue" height="100" width="100"/> : <div>


            <TopNavbar/>

            <Images/>

            <Container fluid>


                <Testimonials/>

            </Container>

            <Footer/>
        </div>;


    }

}

export default App;