import React, {Component} from "react";

class NameRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.value.name,
        };
    }

    componentWillReceiveProps = params => {
        this.setState({
            name: params.value.name
        })
    }

    handleOnChange = event => {
        this.setState({
            name: event.target.value,
        })
    };

    handleSave = () => {
        this.props.setValue({name: this.state.name, id: this.props.value.id});
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.name}
                    onChange={this.handleOnChange}
                />
                <button onClick={this.handleSave}>
                    Save
                </button>
            </div>
        );
    }
};

export default NameRenderer;
