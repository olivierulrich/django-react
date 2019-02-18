import React, {Component} from "react";
import footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Container fluid>
                    <p>
                        this is my footer
                    </p>
                </Container>
            </footer>
        );
    }
}

export default Footer;