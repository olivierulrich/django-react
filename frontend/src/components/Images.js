import React, {Component} from 'react'
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

class Images extends Component {
    render() {
        return (
            <Hero color="primary" gradient size="fullheight" className="has-bg-img">
                <Hero.Body className="has-bg-img">
                    <Container>
                        <Heading size={1}>elevate your home cooking</Heading>
                        <Heading subtitle size={4}>
                            our private cooking lessons will bring your home cooking to the next level
                        </Heading>
                    </Container>
                </Hero.Body>
            </Hero>
        );
    }
}

export default Images;