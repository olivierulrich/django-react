import React, {Component} from "react";
import footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import Level from 'react-bulma-components/lib/components/level';
import Heading from "react-bulma-components/lib/components/heading";

const style = {textAlign: 'center'};
const footerBackground = {backgroundColor: '#2b2e33'};

class Footer extends Component {
    render() {
        return (
            <footer style={footerBackground}>
                <Section>
                    <Container fluid>
                        <Level renderAs="nav" breakpoint="540">
                            <Level.Item style={style}>
                                <div>
                                    <Heading renderAs="p" heading>
                                        Tweets
                                    </Heading>
                                    <Heading renderAs="p" className="has-text-white">3,210</Heading>
                                </div>
                            </Level.Item>
                            <Level.Item style={style}>
                                <div>
                                    <Heading renderAs="p" heading>
                                        Following
                                    </Heading>
                                    <Heading renderAs="p" className="has-text-white">210</Heading>
                                </div>
                            </Level.Item>
                            <Level.Item style={style}>
                                <div>
                                    <Heading renderAs="p" heading>
                                        Followers
                                    </Heading>
                                    <Heading renderAs="p" className="has-text-white">321</Heading>
                                </div>
                            </Level.Item>
                            <Level.Item style={style}>
                                <div>
                                    <Heading renderAs="p" heading>
                                        Likes
                                    </Heading>
                                    <Heading renderAs="p" className="has-text-white">321K</Heading>
                                </div>
                            </Level.Item>
                        </Level>
                    </Container>
                </Section>
            </footer>
        );
    }
}

export default Footer;