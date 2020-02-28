import React, {Component} from "react";

export default class SizeRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: props.value.size,
        };
    }
    
    componentDidUpdate = params => {
      console.log(params);
    }
    
    handleOnChange = event => {
      this.setState({
        size: event.target.value,
      })
    };
    
    handleSave = () => {
      console.log('Saving new size:' + this.state.size);
      this.props.setValue({ size: this.state.size, id: this.props.value.id });
    }

    render() {
        return (
          <div>
            <input
              value={this.state.size}
              onChange={this.handleOnChange}
            />
            <button onClick={this.handleSave}>
              Save
            </button>
          </div>
        );
    }
};
