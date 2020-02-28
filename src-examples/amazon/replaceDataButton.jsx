import React, {Component} from "react";
import {connect} from "react-redux";
import { actions } from "./immutableStore.jsx";

class ReplaceDataButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      rows: 15,
      prefix: 'a'
    };
  }

  updateRows = event => {
    this.setState({
      rows: event.target.value,
    });
  }

  updatePrefix = event => {
    this.setState({
      prefix: event.target.value,
    });
  }

  render() {
      return (
        <div>
          Records: 
          <input
            placeholder="# records"
            type="number"
            onChange={this.updateRows}
            value={this.state.records}
          />
          Prefix: 
          <input
            placeholder="prefix"
            onChange={this.updatePrefix}
            value={this.state.prefix}
          />
          <button
            onClick={() => this.props.replaceAllData(this.state.prefix, this.state.rows)}
          >
            Replace All Data
          </button>
        </div>
      );
  }
};

const mapDispatchToProps = dispatch => ({
  replaceAllData: (prefix, rows) => dispatch(actions.replaceAllData({
    prefix,
    rows
  }))
})

export default connect(null, mapDispatchToProps)(ReplaceDataButton);

