import React, {Component} from "react";
import axios from "axios";
import Section from 'react-bulma-components/lib/components/section';
import Tile from 'react-bulma-components/lib/components/tile';
import Heading from 'react-bulma-components/lib/components/heading';

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

            <Tile kind="parent" vertical>
              <Tile renderAs="article" kind="child" notification color="primary">
                <Heading>{item.customer}</Heading>
                <Heading subtitle>{item.experience}</Heading>
              </Tile>
            </Tile>
        ));

    };

    render() {
        return (
            <Section className="is-medium">
                <Tile kind="ancestor">
                    <Tile size={12}>
                        <Tile>
                            {this.renderItems()}
                        </Tile>
                    </Tile>
                </Tile>
            </Section>
        );
    }
}

export default Testimonials
