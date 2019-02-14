import React, {Component} from "react";
import axios from "axios";
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            activeItem: {
                customer: "",
                experience: "",
                created_at: "",
            },
            testimonialList: []
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
            .get("/api/testimonial/")
            .then(res => this.setState({testimonialList: res.data}))
            .catch(err => console.log(err));
    };

    renderItems = () => {
        return this.state.testimonialList.map(item => (
            <li>
            <span>
                {item.customer}
            </span>
            <span>
                {item.experience}
            </span>
            </li>
        ));

    };

    render() {
        return (
            <Section>
                <Container fluid>
                                {this.renderItems()}
                </Container>
            </Section>
        );
    }
}

export default Testimonials
