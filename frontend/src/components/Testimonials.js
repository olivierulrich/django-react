import React, {Component} from "react";
import axios from "axios";

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
            <span className={"list-group-item d-flex justify-content-between align-items-center"}>
                {item.customer}
            </span>
            <span className={"todo-title"}>
                {item.experience}
            </span>
            </li>
        ));

    };

    render() {
        return (
            <main className="content">
                <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
                <div className="row ">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3">
                            <ul className="list-group list-group-flush">
                                {this.renderItems()}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Testimonials
