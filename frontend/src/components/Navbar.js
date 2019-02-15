import React, {Component} from "react";
import navbar from 'react-bulma-components/lib/components/navbar';

class Navbar extends Component {
    render() {
        return(
            <navbar
                fixed={"top"}
            >
                <p>this is my navigation</p>
            </navbar>
        );
    }
}

export default Navbar;