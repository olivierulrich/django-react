import React, {Component} from "react";
import axios from "axios";
import Section from 'react-bulma-components/lib/components/section';

class Testimonials extends Component {

    /*
    Constructor to set up the item attributes according to the API
     */
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

    /*
    gets the data from the corresponding API endpoint, uses List defined in the constructor
     */
    refreshList = () => {
        axios
            .get("/api/testimonial/")
            .then(res => this.setState({testimonialList: res.data}))
            .catch(err => console.log(err));
    };

    /*
    maps the data from the API to the HTML element.
     */
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
                                {this.renderItems()}
            </Section>
        );
    }
}

export default Testimonials
